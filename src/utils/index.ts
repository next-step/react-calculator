import type { OPERATION } from '../types';
import { CONST } from './const';

export function isOperation(order: OPERATION | string): order is OPERATION {
  return CONST.OPERATION_LIST.some((operation) => operation === order);
}

export function calculate(
  left: number,
  operation: Omit<OPERATION, '='>,
  right: number
) {
  switch (operation) {
    case '+':
      return left + right;
    case '-':
      return left - right;
    case 'X':
      return left * right;
    case '/': {
      if (right === 0) {
        return CONST.INFINITY;
      }
      return Math.floor(left / right);
    }
  }
  return CONST.INFINITY;
}
