import { useCallback, useState } from 'react';

import { ERROR_MESSAGE, MAX_NUM } from '../constants/calculator';

type Operator = '/' | 'X' | '+' | '-';

export default function useCalculator() {
  const [firstNum, setFirstNum] = useState('');
  const [operator, setOperator] = useState<Operator | ''>('');
  const [view, setView] = useState('0');

  const handleNumberClick = useCallback(
    (clickedNum: string) => {
      const newValue =
        view === '0' || (operator && !firstNum)
          ? clickedNum
          : view + clickedNum;
      if (Number(newValue) > MAX_NUM) {
        alert(ERROR_MESSAGE.OVER_MAX_NUMBER);
        return;
      }
      setView(newValue);
      if (!operator) {
        setFirstNum(newValue);
      }
    },
    [view, operator, firstNum],
  );

  const handleOperatorClick = useCallback(
    (selectedOperator: Operator) => {
      if (operator) {
        alert(ERROR_MESSAGE.OPERATOR_ORDER_ERROR);
        return;
      }
      setOperator(selectedOperator);
      setView(firstNum + selectedOperator);
    },
    [operator, view],
  );

  const calculateResult = useCallback(() => {
    if (!firstNum || !operator) {
      return;
    }
    const secondNum = view.substring(firstNum.length + 1);
    const num1 = Number(firstNum);
    const num2 = Number(secondNum);
    const result = calculate(num1, num2, operator);
    if (typeof result === 'number') {
      const truncatedResult = Math.trunc(result);
      setFirstNum(truncatedResult.toString());
      setOperator('');
      setView(truncatedResult.toString());
    } else {
      setView(ERROR_MESSAGE.INFINITY_RESULT_ERROR);
    }
  }, [firstNum, operator, view]);

  const calculate = useCallback((num1: number, num2: number, op: Operator) => {
    switch (op) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case 'X':
        return num1 * num2;
      case '/':
        return num2 !== 0 ? num1 / num2 : ERROR_MESSAGE.INFINITY_RESULT_ERROR;
      default:
        return 0;
    }
  }, []);

  const resetCalculator = useCallback(() => {
    setFirstNum('');
    setOperator('');
    setView('0');
  }, []);

  return {
    handleNumberClick,
    handleOperatorClick,
    calculateResult,
    resetCalculator,
    view,
  };
}
