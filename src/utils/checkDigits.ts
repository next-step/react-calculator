import { MAX_DIGITS } from '../constants';

export const checkIsValidDigits = (num: number) => {
  return Math.abs(num) < 10 * MAX_DIGITS;
};
