import { useState } from 'react';

function useCalculation() {
  const [result, setResult] = useState('0');
  const [count, setCount] = useState(0);

  function calculate(operand, operator) {
    setCount(count + 1);

    let operationResult = 0;
    if (!operator) {
      operationResult = parseInt(operand[0], 10);
    } else {
      switch (operator) {
        case '+':
          operationResult = parseInt(operand[0], 10) + parseInt(operand[1], 10);
          break;
        case '-':
          operationResult = parseInt(operand[0], 10) - parseInt(operand[1], 10);
          break;
        case 'X':
          operationResult = parseInt(operand[0], 10) * parseInt(operand[1], 10);
          break;
        case '/':
          operationResult = parseInt(operand[0], 10) / parseInt(operand[1], 10);
          break;
        default:
          break;
      }
    }

    if (!Number.isFinite(operationResult)) {
      setResult('오류');
    } else {
      setResult(parseInt(operationResult, 10).toString());
    }
  }

  return { result, count, calculate };
}

export default useCalculation;
