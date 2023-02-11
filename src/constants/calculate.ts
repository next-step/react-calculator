export const MAX_INPUT_NUMBER = 3;

export const OPERATIONS = {
  '+': (a: number, b: number) => a + b,
  '-': (a: number, b: number) => a - b,
  X: (a: number, b: number) => a * b,
  '/': (a: number, b: number) => Math.floor(a / b),
  '=': (a: number, b: number) => console.log(a, b),
} as const;

export const DIGITS = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
export const OPERATORS = Object.keys(OPERATIONS);

export type OperationType = keyof typeof OPERATIONS;
