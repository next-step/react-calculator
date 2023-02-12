export const isValidNumber = (number: number) =>
  number > Number.MIN_SAFE_INTEGER && number < Number.MAX_SAFE_INTEGER;
