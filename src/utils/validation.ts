import { MESSAGE } from '../constants/message';

export const Validation = {
  add(result: number) {
    Validation.isInfinite(result);
  },

  subtract(result: number) {
    Validation.isInfinite(result);
  },

  multiply(result: number) {
    Validation.isInfinite(result);
  },

  divide({ x, y }: { x: number; y: number }) {
    Validation.isDivideByZero(y);
    Validation.isInfinite(x);
  },

  digitOverThreeDigits(x: number) {
    if (x * 10 > 999) {
      throw new Error(MESSAGE.ERROR.DIGIT.OVER_THREE_DIGITS);
    }
  },

  isInfinite(result: number) {
    if (result === Infinity || result === -Infinity) {
      throw new Error(MESSAGE.ERROR.RESULT.INFINITE);
    }
  },

  isDivideByZero(y: number) {
    if (y === 0) {
      throw new Error(MESSAGE.ERROR.DIVIDE.BY_ZERO);
    }
  },
};
