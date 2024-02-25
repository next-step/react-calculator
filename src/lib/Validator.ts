import { MAX_DIGITS } from '../constants';

export class Validator {
  static checkIsValidDigits(num: number) {
    return Math.abs(num) < 10 ** MAX_DIGITS;
  }

  static checkIsError(num: number) {
    return !isFinite(num);
  }
}
