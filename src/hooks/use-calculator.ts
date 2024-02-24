import { useMemo, useState } from "react";

export const useCalculator = () => {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [operator, setOperator] = useState("");

  const displayText = useMemo(() => {
    let result = firstNum.toString();

    if (operator) {
      result += ` ${operator}`;
    }

    if (secondNum) {
      result += ` ${secondNum}`;
    }

    return result;
  }, [firstNum, secondNum, operator]);

  const handleNumber = (num: number) => {};
  const handleOperator = (op: string) => {};
  const handleCalculate = () => {};

  const handleReset = () => {};

  return {
    displayText,
    handleNumber,
    handleOperator,
    handleCalculate,
    handleReset,
  };
};
