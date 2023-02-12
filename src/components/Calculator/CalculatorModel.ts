import { Digit, OPERATION } from 'constants/calculator';
import type { ValueOf } from 'types';

type Operation = ValueOf<typeof OPERATION>;

const calculationOptions = {
  [OPERATION.PLUS]: (a: number, b: number) => a + b,
  [OPERATION.MINUS]: (a: number, b: number) => a - b,
  [OPERATION.MULTIPLE]: (a: number, b: number) => a * b,
  [OPERATION.DIVIDE]: (a: number, b: number) => Math.floor(a / b),
};

interface ICalculator {
  operation: Operation | null;
  leftOperand: number;
  rightOperand: number | null;
  accumulator: string;
}

const updateAccumulator = (calcaultor: ICalculator) => {
  const { leftOperand, rightOperand, operation } = calcaultor;

  const newOperation = operation ?? '';
  const newRightOperand = String(rightOperand ?? '');
  const newAccumulator = leftOperand + newOperation + newRightOperand;

  return {
    ...calcaultor,
    accumulator: newAccumulator,
  };
};

const updateOperand = (calcaultor: ICalculator, digit: Digit) => {
  const { leftOperand, rightOperand, operation } = calcaultor;

  return {
    ...calcaultor,
    ...(!operation && { leftOperand: Number(leftOperand + digit) }),
    ...(operation && { rightOperand: Number(rightOperand ? rightOperand + digit : digit) }),
  };
};

const updateOperation = (calcaultor: ICalculator, newOperation: Operation | null) => {
  return {
    ...calcaultor,
    operation: newOperation,
  };
};

const calculate = (calcaultor: ICalculator) => {
  const { leftOperand, rightOperand, operation } = calcaultor;

  if (!operation) {
    throw new Error('Missing Operation');
  }

  if (rightOperand === null) {
    throw new Error('Missing Right Operand');
  }

  const calculationOption = calculationOptions[operation];
  const newLeftOperand = calculationOption(leftOperand, rightOperand);

  return {
    ...calcaultor,
    leftOperand: newLeftOperand,
    operation: null,
    rightOperand: null,
  };
};

export { updateAccumulator, updateOperand, updateOperation, calculate };
export type { ICalculator };
