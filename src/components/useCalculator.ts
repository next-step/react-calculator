import { useMemo, useState } from 'react';
import { CalculatorStackElement, Digit, Operation } from '@/types';
import { ERROR_MESSAGES } from '@/constants';
import { typeChecker, resolveCalculation } from '@/utils';

const MAX_DIGIT_LENGTH = 3;
const INITIAL_CALCULATION_STACK: CalculatorStackElement[] = [];
const INITIAL_ERROR = null;

export const useCalculator = () => {
  const [calculationStack, setCalculationStack] = useState<CalculatorStackElement[]>(INITIAL_CALCULATION_STACK);
  const [error, setError] = useState<string | null>(INITIAL_ERROR);

  const displayValue = useMemo(() => {
    if (error) {
      return error;
    }

    return calculationStack.length === 0 ? Digit.Zero : calculationStack.join('');
  }, [calculationStack, error]);

  const handleClear = () => {
    setCalculationStack(INITIAL_CALCULATION_STACK);
    setError(INITIAL_ERROR);
  };

  const handleResult = () => {
    try {
      if (calculationStack.length === 0) {
        return;
      }
      const calculation = resolveCalculation(calculationStack);
      setCalculationStack([String(calculation)]);
    } catch (error) {
      if (error instanceof Error) {
        setCalculationStack(INITIAL_CALCULATION_STACK);
        setError(error.message);
      }
    }
  };

  const handleInputProcess = (value: Digit | Operation) => {
    if (error) {
      setError(INITIAL_ERROR);
    }

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
    if (error) {
      setError(INITIAL_ERROR);
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
