import React, {useState} from "react";
import {OPERATIONS} from "../../constants/Operations";
import AllClear from "../AllClear/AllClear";
import Digits from "../Digits/Digits";
import Operations from "../Operations/Operations";
import Total from "../Total/Total";
import styles from "./Calculator.module.css";

export type OperatorionsType = typeof OPERATIONS[keyof typeof OPERATIONS];

export default function Calculator() {
  const [reducer, setReducer] = useState<[null | number, number]>([null, 0]);
  const [cacheOperation, setCacheOperation] = useState<OperatorionsType | null>(
    null
  );
  const [isPreviousValueOperator, setIsPreviousValueOperator] =
    useState<Boolean>(false);

  const getTotal = (
    operation: OperatorionsType,
    acc: number,
    cur: number
  ): number => {
    if (acc === null || isPreviousValueOperator) {
      return cur;
    }

    switch (operation) {
      case OPERATIONS.plus:
        return acc + cur;
      case OPERATIONS.minus:
        return acc - cur;
      case OPERATIONS.multiple:
        return acc * cur;
      case OPERATIONS.divide:
        return Math.floor(acc / cur);
      case OPERATIONS.equalSign:
        return acc;
    }
  };

  const setOperand = (operand: number) => {
    const [acc, cur] = reducer;
    const stringOperand = operand.toString();

    if (isPreviousValueOperator) {
      setIsPreviousValueOperator(false);
      setReducer([acc, operand]);
      return;
    }

    const currentOperand = cur + "" + stringOperand;
    if (currentOperand.length > 3) {
      return;
    }
    setReducer([acc, Number(currentOperand)]);
  };

  const setOperation = (operation: OperatorionsType) => {
    const [acc, cur] = reducer;

    if (acc === null) {
      setReducer([cur, cur]);
    } else {
      const total = getTotal(cacheOperation || operation, acc, cur);
      setReducer([total, total]);
    }

    setIsPreviousValueOperator(true);
    setCacheOperation(operation);
  };

  const onResetReducer = () => {
    setReducer([null, 0]);
    setIsPreviousValueOperator(false);
    setCacheOperation(null);
  };

  return (
    <div className="calculator">
      <Total total={reducer[1]} />
      <div className="modifiers subgrid">
        <AllClear onClick={onResetReducer} />
      </div>
      <Digits setOperand={setOperand} />
      <Operations setOperation={setOperation} />
    </div>
  );
}
