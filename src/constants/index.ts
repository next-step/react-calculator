export type OperationKey = 'ADD' | 'SUBTRACT' | 'MULTIPLY' | 'DIVIDE' | 'EQUAL';
export type Operation = typeof OPERATIONS[number];

export const OPERATORS = {
  ADD: '+',
  SUBTRACT: '-',
  MULTIPLY: 'X',
  DIVIDE: '/',
  EQUAL: '=',
} satisfies Record<OperationKey, Operation>;

export const OPERATIONS = ['+', '-', 'X', '/', '='] as const;

export const DIGITS = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] as const;

export const ERROR_TEXT = '오류';

export const LIMIT_NUMBER = 1000;
