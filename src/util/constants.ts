export type Operators = (typeof OPERATORS)[number];
export type CalculateOperators = Exclude<Operators, "=">;

export const OPERATORS = ["/", "X", "-", "+", "="] as const;

export const MAX_NUMBER_LENGTH = 3;

export const MAX_NUM_OF_NUMBERS = 2;
