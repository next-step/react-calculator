import { MESSAGE } from '../constants/message';

export const Validation = {
  CONSTANTS: {
    MAX_DIGIT: 999,
    DIGITS_UNIT: 10,
  },

  add(result: number) {
    this.isInfinite(result);
  },

  subtract(result: number) {
    this.isInfinite(result);
  },

  multiply(result: number) {
    this.isInfinite(result);
  },

  divide({ x, y }: { x: number; y: number }) {
    this.isDivideByZero(y);
    this.isInfinite(x);
  },

  digitOverThreeDigits(x: number) {
    const minX = x * 10;
    const isOverThreeDigits = minX > this.CONSTANTS.MAX_DIGIT;

    if (isOverThreeDigits) {
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
