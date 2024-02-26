import { useState } from 'react';
import { MSG_ERROR_RESULT } from '../constants/messages';

function useCalculation() {
  const [result, setResult] = useState('0');
  const [count, setCount] = useState(0);

  const getResult = {
    '+': (num1, num2) => parseInt(num1, 10) + parseInt(num2, 10),
    '-': (num1, num2) => parseInt(num1, 10) - parseInt(num2, 10),
    X: (num1, num2) => parseInt(num1, 10) * parseInt(num2, 10),
    '/': (num1, num2) => parseInt(num1, 10) / parseInt(num2, 10),
  };

  function checkExpression(operator, operand) {
    return operator && operand[1];
  }

  function checkResult(value) {
    if (Number.isFinite(value)) {
      return parseInt(value, 10).toString();
    }
    return MSG_ERROR_RESULT;
  }

  function calculate(operand, operator) {
    setCount(count + 1);

    const value = checkExpression(operator, operand)
      ? getResult[operator](operand[0], operand[1])
      : parseInt(operand[0], 10);
    setResult(checkResult(value));
  }

  return { result, count, calculate };
}

export default useCalculation;
