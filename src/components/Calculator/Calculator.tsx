import React, {useState} from "react";
import AllClear from "../AllClear/AllClear";
import Digits from "../Digits/Digits";
import Operations from "../Operations/Operations";
import Total from "../Total/Total";
import styles from "./Calculator.module.css";

export type OperatorionsType = "+" | "-" | "/" | "*" | "=";

export default function Calculator() {
  const [reducer, setReducer] = useState<[null | number, number]>([null, 0]);
  const [cacheOperation, setCacheOperation] = useState<OperatorionsType | null>(
    null
  );

  const [isActiveOperation, setIsActiveOperation] = useState<Boolean>(false);

  const getTotal = (
    operation: OperatorionsType,
    acc: number,
    cur: number
  ): number => {
    if (acc === null || isActiveOperation) {
      return cur;
    }

    switch (operation) {
      case "+":
        return acc + cur;
      case "-":
        return acc - cur;
      case "*":
        return acc * cur;
      case "/":
        return Math.floor(acc / cur);
      case "=":
        return acc;
    }
  };

  /**
   * 현재 피연산자를 누름
   * * 이전에 아무 값도 안눌림: [null, 0] => [null, operand]
   * * 이전에 숫자가 눌림: [acc, 이전값] => [null, 이전값 + operand]
   * * 이전에 오퍼레이션이 눌림: [acc, 이전값] => [acc, operand]
   */
  const setOperand = (operand: number) => {
    const [acc, cur] = reducer;
    const stringOperand = operand.toString();

    if (isActiveOperation) {
      setReducer([acc, operand]);
      setIsActiveOperation(false);
    } else {
      const currentOperand = cur + "" + stringOperand;
      if (currentOperand.length > 3) {
        return;
      }
      setReducer([acc, Number(currentOperand)]);
    }
  };

  /**
   * 현재 연산자를 누름
   * * 이전에 아무 값도 안눌림: [null, 0] => [null, 0]
   * * 이전에 숫자가 눌림: [acc, cur] => [acc + cur, acc + cur]
   * * 이전에 오퍼레이션이 눌림: [acc, cur] => [acc, cur]
   */
  const setOperation = (operation: OperatorionsType) => {
    const [acc, cur] = reducer;

    if (acc === null) {
      setReducer([cur, cur]);
    } else {
      const total = getTotal(cacheOperation || operation, acc, cur);
      setReducer([total, total]);
    }

    setIsActiveOperation(true);
    setCacheOperation(operation);
  };

  const onResetReducer = () => {
    setReducer([null, 0]);
    setIsActiveOperation(false);
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
