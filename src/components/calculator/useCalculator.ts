import { useMemo, useState } from 'react';
import type { CalculatorStackElement } from '@/types';
import { CalculatorError, ControlAction, Digit, Operator } from '@/types';
import { ERROR_MESSAGES, MAX_INPUT_DIGIT_LENGTH } from '@/constants';
import { typeChecker } from '@/utils';
import { resolveCalculation } from '@/services';

const INITIAL_CALCULATION_STACK: CalculatorStackElement[] = [];
const INITIAL_ERROR = null;

export const useCalculator = () => {
  const [calculationStack, setCalculationStack] = useState<CalculatorStackElement[]>(INITIAL_CALCULATION_STACK);
  const [error, setError] = useState<string | null>(INITIAL_ERROR);

  const displayValue = useMemo(() => {
    if (error) {
      return error;
    }

    return calculationStack.length === 0 ? String(Digit.Zero) : calculationStack.join('');
  }, [calculationStack, error]);

  const handleInputProcess = (value: string | number) => {
    const isEmptyStack = calculationStack.length === 0;
    const isOperator = typeChecker.validOperator(value);
    const isZero = Number(value) === Digit.Zero;
    if (isEmptyStack && (isOperator || isZero)) {
      setError(INITIAL_ERROR);
      return;
    }

    if (value === ControlAction.Result) {
      handleResult();
      return;
    }

    if (value === ControlAction.AllClear) {
      handleClear();
      return;
    }

    if (typeChecker.validOperator(value)) {
      handleOperator(value);
      return;
    }

    if (typeChecker.validDigit(value)) {
      handleDigit(value);
      return;
    }

    throw new Error(CalculatorError.InvalidInput);
  };

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

  const handleOperator = (operator: Operator) => {
    const lastElementIndex = calculationStack.length - 1;
    const lastElement = calculationStack[lastElementIndex];
    if (typeChecker.validOperator(lastElement)) {
      return;
    }
    if (error) {
      setError(INITIAL_ERROR);
    }
    setCalculationStack((prev) => [...prev, operator]);
  };

  const handleDigit = (digit: Digit) => {
    const lastElementIndex = calculationStack.length - 1;

    if (lastElementIndex < 0) {
      setCalculationStack([String(digit)]);
      return;
    }

    const lastElement = calculationStack[lastElementIndex];

    if (typeChecker.validOperator(lastElement)) {
      setCalculationStack((prev) => [...prev, String(digit)]);
      return;
    }

    if (lastElement.length >= MAX_INPUT_DIGIT_LENGTH) {
      alert(ERROR_MESSAGES.INPUT_DIGIT_LIMIT);
      return;
    }

    const newElement = lastElement + digit;
    setCalculationStack((prev) => [...prev.slice(0, lastElementIndex), newElement]);
  };

  return {
    displayValue,
    handleInputProcess,
  };
};
