import { useCallback, useState } from 'react';
import { OperatorType } from '../common/types';
import { makeOperate } from '../utils/calculator';

interface CalculatorState {
  num1: number;
  num2?: number;
  operator?: OperatorType;
}

const INITIAL_CALCULATOR_STATE: CalculatorState = { num1: 0 };

export default function useCalculator() {
  const [{ num1, num2, operator }, setState] = useState<CalculatorState>(INITIAL_CALCULATOR_STATE);

  const inputNumber = useCallback(
    (num: number) => {
      const isInfinite = num1 === Infinity;
      if (isInfinite) {
        setState({ num1: num });
        return;
      }

      const isFirstNum = operator === undefined;
      const inputText = isFirstNum ? num1 : num2;
      if (inputText && inputText.toString().length > 2) {
        alert('숫자는 세 자리까지만 입력 가능합니다!');
        return;
      }
      const newText = (inputText ?? '') + num.toString();
      setState(prev =>
        isFirstNum ? { ...prev, num1: parseInt(newText) } : { ...prev, num2: parseInt(newText) },
      );
    },
    [num1, num2, operator],
  );

  const clear = useCallback(() => {
    setState(INITIAL_CALCULATOR_STATE);
  }, []);

  const inputOperator = useCallback(
    (input: OperatorType) => {
      const shouldCalculate = input === '=' && num2 !== undefined && operator;
      if (shouldCalculate) {
        const operate = makeOperate(operator);
        const result = operate(num1, num2);
        setState({ num1: result });
        return;
      }
      if (num2) {
        alert('두 수의 연산만 가능합니다!');
        return;
      }
      setState(prev => ({ ...prev, operator: input }));
    },
    [num1, num2, operator],
  );
  return { num1, num2, operator, inputNumber, clear, inputOperator };
}
