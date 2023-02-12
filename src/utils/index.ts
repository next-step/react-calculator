import { OPERATORS } from '../constants';

// 도메인 로직
export const calculations = {
  [OPERATORS.ADD]: (prev: number, next: number) => prev + next,
  [OPERATORS.SUBTRACT]: (prev: number, next: number) => prev - next,
  [OPERATORS.MULTIPLY]: (prev: number, next: number) => prev * next,
  [OPERATORS.DIVIDE]: (prev: number, next: number) => prev / next,
};
