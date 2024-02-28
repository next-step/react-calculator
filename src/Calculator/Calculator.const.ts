export const DEFAULT_MAX_NUMBER_LENGTH = 3

/** 9 부터 0 까지 */
export const DIGITS = Array.from({ length: 10 }, (_, index) => 9 - index)

export const OPERATORS = ['/', 'X', '-', '+', '='] as const
