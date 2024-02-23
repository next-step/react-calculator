import { useState } from 'react';
import {
  INITIAL_DIGIT,
  INITIAL_VALUE,
  MAX_DIGIT_LENGTH,
  MESSAGES,
} from '../constant/calculator';

const INITIAL_OPERATION = INITIAL_VALUE;
const INITIAL_OPERANDS = {
  firstValue: INITIAL_DIGIT,
  secondValue: INITIAL_VALUE,
};

export default function useCalculate() {
  const [operation, setOperation] = useState(INITIAL_OPERATION);
  const [operands, setOperands] = useState(INITIAL_OPERANDS);

  const handleDigitClick = (digit: number) => {
    if (!operation) {
      if (operands.firstValue === INITIAL_DIGIT) {
        setOperands((prevOperands) => ({
          ...prevOperands,
          firstValue: String(digit),
        }));
      } else {
        if (operands.firstValue.length >= MAX_DIGIT_LENGTH) {
          alert(MESSAGES.DIGIT_LIMIT);
          return;
        }
        setOperands((prevOperands) => ({
          ...prevOperands,
          firstValue: prevOperands.firstValue + String(digit),
        }));
      }
    } else {
      if (operands.secondValue.length >= MAX_DIGIT_LENGTH) {
        alert(MESSAGES.DIGIT_LIMIT);
        return;
      }
      setOperands((prevOperands) => ({
        ...prevOperands,
        secondValue: prevOperands.secondValue + String(digit),
      }));
    }
  };

  const handleOperationClick = (clickedOperation: string) => {
    if (clickedOperation === '=') {
      if (!operation) return;

      const total = calculate(operation);
      setOperands({
        firstValue: String(total),
        secondValue: INITIAL_VALUE,
      });
      setOperation(INITIAL_OPERATION);
    } else {
      if (operands === INITIAL_OPERANDS) {
        alert(MESSAGES.NUMBER_FIRST);
        return;
      }
      setOperation(clickedOperation);
    }
  };

  const calculate = (operation: string) => {
    const { firstValue, secondValue } = operands;

    switch (operation) {
      case '/':
        return Math.floor(Number(firstValue) / Number(secondValue));
      case 'X':
        return Number(firstValue) * Number(secondValue);
      case '-':
        return Number(firstValue) - Number(secondValue);
      case '+':
        return Number(firstValue) + Number(secondValue);
      default:
        break;
    }
  };

  const allClear = () => {
    setOperands(INITIAL_OPERANDS);
    setOperation(INITIAL_OPERATION);
  };

  const handleModifierClick = () => {
    allClear();
  };

  return {
    operands,
    operation,
    handleDigitClick,
    handleOperationClick,
    handleModifierClick,
  };
}
