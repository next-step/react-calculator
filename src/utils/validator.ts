export const validator = {
  validNumber: (value: string | number) => {
    if (typeof value === 'string') {
      return /^\d+$/.test(value);
    }
    return Number.isFinite(value);
  },
};
