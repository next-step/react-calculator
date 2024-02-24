import { useMemo, useState } from "react";
import { Messages, OperatorValues, Operators } from "../constants";

const OperatorMap: Record<OperatorValues, (a: number, b: number) => number> = {
  [Operators.Plus]: (a: number, b: number) => a + b,
  [Operators.Minus]: (a: number, b: number) => a - b,
  [Operators.Multiply]: (a: number, b: number) => a * b,
  [Operators.Divide]: (a: number, b: number) => Math.floor(a / b),
};

export const useCalculator = () => {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [operator, setOperator] = useState<OperatorValues | null>(null);

  const displayText = useMemo(() => {
    let result = firstNum.toString();

    if (operator) result += `${operator}`;
    if (secondNum !== 0) result += `${secondNum}`;

    return result;
  }, [firstNum, secondNum, operator]);

  const handleNumberInput = (input: number) => {
    if (!operator) {
      if (firstNum.toString().length >= 3) {
        window.alert(Messages.MaxInputLength);
        return;
      }

      if (firstNum === 0) {
        setFirstNum(input);
        return;
      }

      setFirstNum(parseInt(`${firstNum}${input}`, 10));
    } else {
      if (secondNum.toString().length >= 3) {
        window.alert(Messages.MaxInputLength);
        return;
      }

      if (secondNum === 0) {
        setSecondNum(input);
        return;
      }

      setSecondNum(parseInt(`${secondNum}${input}`, 10));
    }
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
