import React, {useState} from "react";
import {REG_RULES} from "../constants/RegExps";
import {OperatorionsType} from "../models/Operations";
import {getTotal} from "../utils/calculate";

type useCalculateResultTuple = [
  [number | null, number],
  (value: OperatorionsType | number) => void,
  () => void
];

type useCalculateFn = () => useCalculateResultTuple;

export const useCalculate: useCalculateFn = () => {
  const MAXIUM_LENGTH = 3;
  const [reducer, setReducer] = useState<[null | number, number]>([null, 0]);
  const [cachePreviousValue, setCachePreviousValue] = useState("");
  const [cacheOperation, setCacheOperation] = useState<null | OperatorionsType>(
    null
  );

  const isPreviousValueOperator = () => {
    return !!REG_RULES.operators.test(cachePreviousValue);
  };

  const onPressValue = (value: OperatorionsType | number) => {
    if (typeof value === "number") {
      setOperand(value);
    } else {
      setOperator(value);
    }
  };

  const setOperand = (operand: number) => {
    const [total, current] = reducer;
    const stringOperand = operand.toString();

    setCachePreviousValue(stringOperand);
    if (isPreviousValueOperator()) {
      setReducer([total, operand]);
      return;
    }

    const currentOperand = current + "" + stringOperand;
    if (currentOperand.length > MAXIUM_LENGTH) {
      return;
    }
    setReducer([total, Number(currentOperand)]);
  };

  const setOperator = (operation: OperatorionsType) => {
    const [total, current] = reducer;

    if (total === null) {
      setReducer([current, current]);
    } else {
      const currentTotal = getTotal({
        operation: cacheOperation || operation,
        total,
        current,
        isPreviousOperator: isPreviousValueOperator(),
      });
      setReducer([currentTotal, currentTotal]);
    }
    setCachePreviousValue(operation);
    setCacheOperation(operation);
  };

  const reset = () => {
    setReducer([null, 0]);
    setCachePreviousValue("");
    setCacheOperation(null);
  };

  return [reducer, onPressValue, reset];
};
