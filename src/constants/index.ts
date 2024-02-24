export const DIGITS = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

export enum Operators {
  DIVIDE = '/',
  MULTIPLY = 'X',
  SUBTRACT = '-',
  ADD = '+',
  EQUALS = '=',
}

export const operations = {
  [Operators.DIVIDE]: (a: number, b: number) => a / b,
  [Operators.MULTIPLY]: (a: number, b: number) => a * b,
  [Operators.SUBTRACT]: (a: number, b: number) => a - b,
  [Operators.ADD]: (a: number, b: number) => a + b,
  [Operators.EQUALS]: (a: number) => a,
};
