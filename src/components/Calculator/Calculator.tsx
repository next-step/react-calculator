import React, {useState} from "react";
import {OPERATIONS} from "../../constants/Operations";
import AllClearButton from "../AllClearButton/AllClearButton";
import Digits from "../Digits/Digits";
import Operations from "../Operations/Operations";
import Total from "../Total/Total";
import styles from "./Calculator.module.css";
import {getTotal} from "../../utils/calculate";

export type OperatorionsType = typeof OPERATIONS[keyof typeof OPERATIONS];

export default function Calculator() {
  const [reducer, setReducer] = useState<[null | number, number]>([null, 0]);
  const [cacheOperation, setCacheOperation] = useState<OperatorionsType | null>(
    null
  );
  const [isPreviousValueOperator, setIsPreviousValueOperator] =
    useState<boolean>(false);

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
      const total = getTotal({
        operation: cacheOperation || operation,
        total: acc,
        current: cur,
        isPreviousOperator: isPreviousValueOperator,
      });
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
        <AllClearButton onClick={onResetReducer} />
      </div>
      <Digits onClick={setOperand} />
      <Operations onClick={setOperation} />
    </div>
  );
}
