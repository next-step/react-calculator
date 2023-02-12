import { OPERATIONS, OPERATORS, Operation } from '../constants';

// 도메인 로직
export const calculations = {
  [OPERATORS.ADD]: (prev: number, next: number) => prev + next,
  [OPERATORS.SUBTRACT]: (prev: number, next: number) => prev - next,
  [OPERATORS.MULTIPLY]: (prev: number, next: number) => prev * next,
  [OPERATORS.DIVIDE]: (prev: number, next: number) => prev / next,
};

export const isOperator = (input: any): input is Operation => {
  return OPERATIONS.includes(input);
};

export const isNumber = (input: any): input is number => {
  return !Number.isNaN(Number(input));
};
