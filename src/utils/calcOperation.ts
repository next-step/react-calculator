import { Operator } from '@/constants/operation';

type CalcOperation = { [key in Operator]: () => number };

export const calcOperation = (a: number, b: number): CalcOperation => {
  return {
    ['/']: () => Math.trunc(a / b),
    ['X']: () => a * b,
    ['-']: () => a - b,
    ['+']: () => a + b,
  };
};
