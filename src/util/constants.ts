export type Operators = (typeof OPERATORS)[number];
export type CalculateOperators = Exclude<Operators, EqualOperator>;
export type EqualOperator = typeof EQUAL_OPERATOR;

export const CALCULATE_OPERATOR = ["/", "X", "-", "+"] as const;
export const EQUAL_OPERATOR = "=" as const;
export const OPERATORS = [...CALCULATE_OPERATOR, EQUAL_OPERATOR] as const;

export const MAX_NUMBER_LENGTH = 3;

export const MAX_NUM_OF_NUMBERS = 2;
