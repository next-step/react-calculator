const OPERATOR = {
  ADD: '+',
  MINUS: '-',
  DIVIDE: '/',
  MULTIPLY: 'X',
} as const;

export const OPERATE = '=';
export const CLEAR = 'clear';
export const OPERATORS = Object.values(OPERATOR);
export type Operator = typeof OPERATORS[number];
