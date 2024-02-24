export const CALCULATOR_NUMBER_LIST = new Array(10)
  .fill(null)
  .map((_, i) => i)
  .reverse()

export const OPERATOR_LIST = ['/', 'X', '-', '+', '='] as const

export const MAX_NUMBER_COUNT = 3
