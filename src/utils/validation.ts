export const isNumber = (num: unknown): num is number =>
  typeof num === 'number' && !isNaN(num) && isFinite(num)
