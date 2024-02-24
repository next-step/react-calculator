import { CalculatorError, CalculatorStackElement, Operator } from '@/types';
import { calculate, typeChecker, validator } from '@/utils';

export const resolveCalculation = (inputStack: CalculatorStackElement[]): string | number => {
  const trimmedStack = trimTrailingOperator(inputStack);
  if (trimmedStack.length === 0) {
    return 0;
  }

  const firstStackElement = Number(trimmedStack[0]);

  if (trimmedStack.length === 1) {
    return firstStackElement;
  }

  const calculation = trimmedStack.reduce((acc, operator, index) => {
    if (index % 2 === 0) {
      return acc;
    }
    if (!typeChecker.validOperator(operator)) {
      throw new Error(CalculatorError.InvalidOperator);
    }

    const nextOperand = Number(trimmedStack[index + 1]);
    return calculateOperation(acc, nextOperand, operator);
  }, firstStackElement);

  if (validator.validateInfinity(calculation)) {
    throw new Error(CalculatorError.Infinity);
  }

  if (Number.isNaN(calculation)) {
    throw new Error(CalculatorError.NaN);
  }

  return calculation;
};

const trimTrailingOperator = (inputStack: CalculatorStackElement[]) => {
  if (inputStack.length === 0) {
    return inputStack;
  }
  const lastElement = inputStack[inputStack.length - 1];
  if (typeChecker.validOperator(lastElement)) {
    return inputStack.slice(0, -1);
  }
  return inputStack;
};

const calculateOperation = (operand1: number, operand2: number, operation: Operator) => {
  const calculateOperations = {
    [Operator.Add]: calculate.add,
    [Operator.Subtract]: calculate.subtract,
    [Operator.Multiply]: calculate.multiply,
    [Operator.Divide]: calculate.divide,
  };
  const operationFunction = calculateOperations[operation];
  return operationFunction(operand1, operand2);
};
