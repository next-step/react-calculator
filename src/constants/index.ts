export const operations = {
  ADD: '+',
  SUBTRACT: '-',
  MULTIPLY: 'X',
  DIVIDE: '/',
  EQUAL: '=',
} satisfies Record<typeof OPERATIONS_LIST[number], '+' | '-' | 'X' | '/' | '='>;

export const DIGITS = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] as const;
export const OPERATIONS_LIST = [
  'ADD',
  'SUBTRACT',
  'MULTIPLY',
  'DIVIDE',
  'EQUAL',
] as const;
