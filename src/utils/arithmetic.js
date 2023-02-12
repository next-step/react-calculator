import { ERROR_TEXT, INPUT_NOT_ALLOWED_MESSAGE } from '../constants/error';

export const arithmetic = (augend, addend = 0, operation) => {
  switch (operation) {
    case '+':
      return augend + addend;
    case '-':
      return augend - addend;
    case '/':
      return Math.floor(augend / addend);
    case 'X':
      return augend * addend;
    default:
      alert(INPUT_NOT_ALLOWED_MESSAGE);
      return ERROR_TEXT;
  }
};
