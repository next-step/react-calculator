import { useEffect, useState } from "react";

const OPERATION = {
  DIVIDE: "/",
  MULTIPLY: "X",
  MINUS: "-",
  PLUS: "+",
};

function useCalculate() {
  const [digit, setDigit] = useState(0);
  const [digits, setDigits] = useState([]);
  const [operation, setOperation] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleDigitClick = (clickedDigit) => {
    if (String(digit).length === 3) {
      return;
    }

    setIsTyping(true);

    if (!isTyping) {
      setDigit(clickedDigit);
      return;
    }

    setDigit(Number(`${digit}${clickedDigit}`));
  };

  const handleOperationClick = (operation) => {
    if (!digit) return;

    setDigits([digit]);
    setOperation(operation);
    setIsTyping(false);
  };

  const handleModifierClick = () => {
    setDigit(0);
    setOperation("");
    setDigits([]);
    setIsTyping(false);
  };

  const calculate = (digits, operation) => {
    let result = 0;

    switch (operation) {
      case OPERATION.DIVIDE:
        result = Math.floor(digits[0] / digits[1]);
        break;
      case OPERATION.MULTIPLY:
        result = digits[0] * digits[1];
        break;
      case OPERATION.MINUS:
        result = digits[0] - digits[1];
        break;
      case OPERATION.PLUS:
        result = digits[0] + digits[1];
        break;
      default:
        result = 1;
    }

    return result;
  };

  const checkResultIsFinite = (result) => {
    if (!isFinite(result)) return "오류";

    return result;
  };

  const handleCalculateClick = () => {
    setDigits((num) => [...num, digit]);
    setIsTyping(false);
  };

  useEffect(() => {
    if (digits.length > 1) {
      let result = calculate(digits, operation);
      result = checkResultIsFinite(result);
      setDigit(result);
      setDigits([result]);
    }
  }, [digits, operation]);

  return {
    digit,
    handleDigitClick,
    handleOperationClick,
    handleModifierClick,
    handleCalculateClick,
  };
}

export default useCalculate;
