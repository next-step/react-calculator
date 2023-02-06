export const OPERATORS = ['/', 'X', '+', '-'] as const;
export type Operator = typeof OPERATORS[number];
