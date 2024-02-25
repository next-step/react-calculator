import { useCallback, useState } from 'react';
import { ArithmeticOperatorType, OperatorType } from '../common/types';
import { add, divide, multiply, substract } from '../utils/calculator';

interface CalculatorState {
  num1: number;
  num2?: number;
  isNum2Negative?: boolean;
  operator?: ArithmeticOperatorType;
}

const INITIAL_CALCULATOR_STATE: CalculatorState = { num1: 0 };

export default function useCalculator() {
  const [{ num1, num2, operator, isNum2Negative }, setCalculatorState] =
    useState<CalculatorState>(INITIAL_CALCULATOR_STATE);

  const getCalculator = useCallback((operator: ArithmeticOperatorType) => {
    switch (operator) {
      case '+':
        return add;
      case '-':
        return substract;
      case 'X':
        return multiply;
      case '/':
        return divide;
      default:
        throw Error('없는 연산자입니다!');
    }
  }, []);

  const inputNumber = useCallback(
    (num: number) => {
      const isInfinite = num1 === Infinity;
      if (isInfinite) {
        setCalculatorState({ num1: num });
        return;
      }

      const isFirstNum = operator === undefined;
      const inputText = isFirstNum ? num1 : num2;
      if (inputText && inputText.toString().length > 2) {
        alert('숫자는 세 자리까지만 입력 가능합니다!');
        return;
      }

      const newText = (inputText ?? '') + num.toString();
      setCalculatorState(prev =>
        isFirstNum ? { ...prev, num1: parseInt(newText) } : { ...prev, num2: parseInt(newText) },
      );
    },
    [num1, num2, operator],
  );

  const clear = useCallback(() => {
    setCalculatorState(INITIAL_CALCULATOR_STATE);
  }, []);

  const inputOperator = useCallback(
    (input: OperatorType) => {
      const isFirstOperator = num2 === undefined;
      if (isFirstOperator) {
        if (input === '=') return;
        if (operator && input === '-') {
          setCalculatorState(prev => ({ ...prev, isNum2Negative: true }));
          return;
        }
        setCalculatorState(prev => ({ ...prev, operator: input }));
        return;
      }

      if (operator === undefined) return;
      if (input !== '=') {
        alert('두 수의 연산만 가능합니다!');
        return;
      }
      const calculate = getCalculator(operator);
      const result = calculate(num1, isNum2Negative ? -num2 : num2);
      setCalculatorState({ num1: result });
    },
    [num1, num2, operator, isNum2Negative],
  );
  return { num1, num2, isNum2Negative, operator, inputNumber, clear, inputOperator };
}
