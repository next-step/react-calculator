import { useState } from "react";
import {
  operations,
  shouldAddOperatorToTotal,
  shouldUpdateTotal,
  shouldCalculateTotal,
  getNextTotal,
  calculateTotal,
} from "../utils/calculationUtils";

const useCalculation = () => {
  const [total, setTotal] = useState("0");

  const handleOperationClick = (operation) => {
    const lastChar = total.charAt(total.length - 1);
    const isLastCharNumber = /[0-9]/.test(lastChar);

    if (shouldAddOperatorToTotal(operation, isLastCharNumber)) {
      operations.addOperatorToTotal(setTotal, operation, total);
      return;
    }

    if (shouldUpdateTotal(operation)) {
      operations.updateTotal(setTotal, operation, total, getNextTotal);
      return;
    }

    if (shouldCalculateTotal(operation, total)) {
      operations.calculateTotal(setTotal, total, calculateTotal);
    }
  };

  const handleDigitClick = (digit) => {
    const MAX_DIGITS_IN_OPERAND = 3;
    const MAX_DIGITS = 7;
    const isLastCharNumber = /[0-9]/.test(total[total.length - 1]);

    const isFirstDigit = total === "0";
    const hasMaxDigitsInOperand =
      total.length === MAX_DIGITS_IN_OPERAND && isLastCharNumber;
    const hasMaxDigits = total.length >= MAX_DIGITS;

    if (isFirstDigit) {
      setTotal(digit.toString());
      return;
    }

    if (hasMaxDigitsInOperand || hasMaxDigits) return;

    setTotal((prevTotal) => prevTotal + digit.toString());
  };

  const handleAllClearClick = () => {
    setTotal("0");
  };

  return [total, handleDigitClick, handleAllClearClick, handleOperationClick];
};

export default useCalculation;
