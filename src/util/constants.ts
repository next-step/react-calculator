export type OperatorTypes = (typeof OPERATORS)[number];
export type CalOperatorTypes = Exclude<OperatorTypes, "=">;

export const OPERATORS = ["/", "X", "-", "+", "="] as const;

export const MAX_NUMBER_LENGTH = 3;

export const MAX_NUM_OF_NUMBERS = 2;
