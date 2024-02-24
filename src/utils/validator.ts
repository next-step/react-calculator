export const validator = {
  validateNumber: (value: string | number) => {
    if (typeof value === 'string') {
      return /^\d+$/.test(value);
    }
    return Number.isFinite(value);
  },
  validateInfinity: (value: string | number) => value === Infinity || value === -Infinity,
};
