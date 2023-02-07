export const validator = {
  lte: (baseValue: number, compareValue: number) => baseValue <= compareValue,
};

export const validate = (predicate: boolean, message: string) => {
  if (!predicate) {
    throw new Error(message);
  }
};
