import { useState } from 'react';
import {
  INITIAL_DIGIT,
  INITIAL_VALUE,
  MAX_DIGIT_LENGTH,
  MESSAGES,
} from '../constant/calculator';

const INITIAL_OPERATION = INITIAL_VALUE;
const INITIAL_VALUES = {
  firstValue: INITIAL_DIGIT,
  secondValue: INITIAL_VALUE,
};

export default function useCalculate() {
  const [operation, setOperation] = useState(INITIAL_OPERATION);
  const [values, setValues] = useState(INITIAL_VALUES);

  const handleDigitClick = (digit: number) => {
    if (!operation) {
      if (values.firstValue === INITIAL_DIGIT) {
        setValues((prevState) => ({
          ...prevState,
          firstValue: String(digit),
        }));
      } else {
        if (values.firstValue.length >= MAX_DIGIT_LENGTH) {
          alert(MESSAGES.DIGIT_LIMIT);
          return;
        }
        setValues((prevState) => ({
          ...prevState,
          firstValue: prevState.firstValue + String(digit),
        }));
      }
    } else {
      if (values.secondValue.length >= MAX_DIGIT_LENGTH) {
        alert(MESSAGES.DIGIT_LIMIT);
        return;
      }
      setValues((prevState) => ({
        ...prevState,
        secondValue: prevState.secondValue + String(digit),
      }));
    }
  };

  const handleOperationClick = (clickedOperation: string) => {
    if (clickedOperation === '=') {
      if (!operation) return;

      const total = calculate(operation);
      setValues({
        firstValue: String(total),
        secondValue: INITIAL_VALUE,
      });
      setOperation(INITIAL_OPERATION);
    } else {
      if (values === INITIAL_VALUES) {
        alert(MESSAGES.NUMBER_FIRST);
        return;
      }
      setOperation(clickedOperation);
    }
  };

  const calculate = (operation: string) => {
    const { firstValue, secondValue } = values;

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
    setValues(INITIAL_VALUES);
    setOperation(INITIAL_OPERATION);
  };

  const handleModifierClick = () => {
    allClear();
  };

  return {
    values,
    operation,
    handleDigitClick,
    handleOperationClick,
    handleModifierClick,
  };
}
