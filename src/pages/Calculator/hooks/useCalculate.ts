import { useState, MouseEvent } from 'react';
import { NUMBER_MAX_LENGTH, OPERATORS } from '../../../constants';
import { ArithmeticOperators, OperationState } from '../types';

const operations: {
  [key in ArithmeticOperators]: (a: number, b: number) => number;
} = {
  [OPERATORS.DIVIDE]: (a: number, b: number) => Math.floor(a / b),
  [OPERATORS.MULTIPLY]: (a: number, b: number) => a * b,
  [OPERATORS.SUBTRACT]: (a: number, b: number) => a - b,
  [OPERATORS.ADD]: (a: number, b: number) => a + b,
};

const initialState: OperationState = {
  operator: null,
  operand1: 0,
  operand2: null,
};

export const useCalculate = () => {
  const [operationsState, setOperationState] =
    useState<OperationState>(initialState);
  const [error, setError] = useState<Error | null>(null);

  const clear = () => {
    setOperationState(initialState);
    setError(null);
  };

  const handleOperator = (e: MouseEvent<HTMLButtonElement>) => {
    const { operand1, operand2, operator } = operationsState;
    const { textContent: targetOperator } = e.currentTarget;
    if (!targetOperator) return;

    const isFirstOperandInputExist = Boolean(operand1);
    if (!isFirstOperandInputExist) {
      alert('숫자를 먼저 입력해주세요.');
      return;
    }

    if (targetOperator === OPERATORS.EQUALS) {
      if (!operator) return;

      const result = operations[operator](operand1, operand2!);

      if (Number.isNaN(result) || !Number.isFinite(result)) {
        setError(new Error('오류'));
      }

      setOperationState({
        operator: null,
        operand1: result,
        operand2: null,
      });
      return;
    }

    if (operand1 && operand2) return;
    setOperationState((prev) => ({
      ...prev,
      operator: targetOperator as ArithmeticOperators,
    }));
  };

  const handleDigit = (e: MouseEvent<HTMLButtonElement>) => {
    const { operand1, operand2, operator } = operationsState;
    const { textContent: digit } = e.currentTarget;
    if (!digit) return;

    const isFirstOperandInput = !operand2 && !operator;

    if (isFirstOperandInput) {
      const value = operand1 + digit;
      if (value.length > NUMBER_MAX_LENGTH) {
        alert('숫자는 3자리까지만 입력 가능합니다.');
        return;
      }

      setOperationState((prev) => ({
        ...prev,
        operand1: Number(value),
      }));
    }

    if (!isFirstOperandInput) {
      if (!operand2) {
        setOperationState((prev) => ({
          ...prev,
          operand2: Number(digit),
        }));
        return;
      }

      const value = operand2 + digit;
      if (value.length > NUMBER_MAX_LENGTH) {
        alert('숫자는 3자리까지만 입력 가능합니다.');
        return;
      }

      setOperationState((prev) => ({
        ...prev,
        operand2: Number(value),
      }));
    }
  };

  return {
    operationsState,
    error,
    clear,
    handleOperator,
    handleDigit,
  };
};
