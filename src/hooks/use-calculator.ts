import { useMemo, useState } from "react";
import {
  MaxNumberLength,
  Messages,
  OperatorValues,
  Operators,
} from "../constants";

const OperatorMap: Record<OperatorValues, (a: number, b: number) => number> = {
  [Operators.Plus]: (a, b) => a + b,
  [Operators.Minus]: (a, b) => a - b,
  [Operators.Multiply]: (a, b) => a * b,
  [Operators.Divide]: (a, b) => Math.floor(a / b),
};

export const useCalculator = () => {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [operator, setOperator] = useState<OperatorValues | null>(null);

  const displayText = useMemo(() => {
    let result = isFinite(firstNum) ? `${firstNum}` : "오류";

    if (operator) result += `${operator}`;
    if (secondNum !== 0) result += `${secondNum}`;

    return result;
  }, [firstNum, secondNum, operator]);

  const handleNumberInput = (input: number) => {
    const currentNum = operator ? secondNum : firstNum;
    const setNum = operator ? setSecondNum : setFirstNum;

    if (currentNum.toString().length >= MaxNumberLength) {
      window.alert(Messages.MaxInputLength);
      return;
    }

    if (currentNum === 0) {
      setNum(input);
      return;
    }

    setNum(parseInt(`${currentNum}${input}`, 10));
  };

  const handleSetOperator = (input: OperatorValues) => {
    if (firstNum === 0 && secondNum === 0) {
      window.alert(Messages.InputNumberFirst);
      return;
    }

    if (operator) {
      window.alert(Messages.InputOperatorOnce);
      return;
    }

    setOperator(input);
  };

  const handleCalculate = () => {
    if (!operator) return;
    const result = OperatorMap[operator](firstNum, secondNum);

    setFirstNum(result);
    setSecondNum(0);
    setOperator(null);
  };

  const handleReset = () => {
    setFirstNum(0);
    setSecondNum(0);
    setOperator(null);
  };

  return {
    displayText,
    handleNumberInput,
    handleSetOperator,
    handleCalculate,
    handleReset,
  };
};
