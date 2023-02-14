import { OPERATIONS } from '../constants/operations';

export const arithmetic = {
  [OPERATIONS.PLUS]: (augend, addend = 0) => augend + addend,
  [OPERATIONS.MINUS]: (augend, addend = 0) => augend - addend,
  [OPERATIONS.DIVIDE]: (augend, addend = 0) => Math.floor(augend / addend),
  [OPERATIONS.MULTIPLY]: (augend, addend = 0) => augend * addend,
};
