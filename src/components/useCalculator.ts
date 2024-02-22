import { useMemo, useState } from 'react';
import { CalculatorError, CalculatorStackElement, Digit, Operation } from '@/types';
import { ERROR_MESSAGES } from '@/constants';
import { typeChecker } from '@/utils';

const MAX_DIGIT_LENGTH = 3;
const INITIAL_CALCULATION_STACK: CalculatorStackElement[] = [];
const INITIAL_ERROR = null;

export const useCalculator = () => {
  const [calculationStack, setCalculationStack] = useState<CalculatorStackElement[]>(INITIAL_CALCULATION_STACK);
  const [error, setError] = useState<CalculatorError | null>(INITIAL_ERROR);

  const displayValue = useMemo(() => {
    if (error) {
      return error;
    }

    if (calculationStack.length === 0) {
      return Digit.Zero;
    }

    return calculationStack.join('');
  }, [calculationStack, error]);

  const handleClear = () => {
    setCalculationStack(INITIAL_CALCULATION_STACK);
    setError(INITIAL_ERROR);
  };

  const handleResult = () => {
    if (calculationStack.length === 0) {
      return;
    }
    const lastElement = calculationStack[calculationStack.length - 1];
    try {
      if (typeChecker.validOperation(lastElement)) {
        // TODO: 마지막 연산자 제거 후 계산
        return;
      }
      // TODO: 계산
      console.log('result');
    } catch (e) {
      // TODO: Infinity, NaN 에러 처리
    }
  };

  const handleInputProcess = (value: Digit | Operation) => {
    const isEmpty = calculationStack.length === 0;
    const isValidOperation = typeChecker.validOperation(value);

    // NOTE: 첫 입력 값은 0 또는 연산자가 올 수 없습니다.
    if (isEmpty && (isValidOperation || value === Digit.Zero)) {
      return;
    }

    if (isValidOperation) {
      handleOperation(value);
      return;
    }

    handleDigit(value);
  };

  const handleOperation = (operation: Operation) => {
    const lastElementIndex = calculationStack.length - 1;
    const lastElement = calculationStack[lastElementIndex];
    if (typeChecker.validOperation(lastElement)) {
      return;
    }
    setCalculationStack((prev) => [...prev, operation]);
  };

  const handleDigit = (digit: Digit) => {
    const lastElementIndex = calculationStack.length - 1;

    if (lastElementIndex < 0) {
      setCalculationStack([digit]);
      return;
    }

    const lastElement = calculationStack[lastElementIndex];

    if (typeChecker.validOperation(lastElement)) {
      setCalculationStack((prev) => [...prev, digit]);
      return;
    }

    if (lastElement.length >= MAX_DIGIT_LENGTH) {
      alert(ERROR_MESSAGES.MAX_DIGIT_LENGTH);
      return;
    }

    const newElement = lastElement + digit;
    setCalculationStack((prev) => [...prev.slice(0, lastElementIndex), newElement]);
  };

  return {
    displayValue,
    handleClear,
    handleResult,
    handleInputProcess,
  };
};
