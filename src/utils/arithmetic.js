import { ERROR_TEXT, ERROR_MESSAGE } from '../constants/error';
import { OPERATIONS } from '../constants/operations';

export const arithmetic = (augend, addend = 0, operation) => {
  switch (operation) {
    case OPERATIONS.PLUS:
      return augend + addend;
    case OPERATIONS.MINUS:
      return augend - addend;
    case OPERATIONS.DIVIDE:
      return Math.floor(augend / addend);
    case OPERATIONS.MULTIPLY:
      return augend * addend;
    default:
      alert(ERROR_MESSAGE.NOT_ALLOWED);
      return ERROR_TEXT;
  }
};
