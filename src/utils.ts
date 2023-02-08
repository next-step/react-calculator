import { OPERATION } from 'constant';
import type { ValueOf } from 'types';

type Operation = ValueOf<typeof OPERATION>;

function calculate(augend: number, addend: number, operation: Operation) {
  switch (operation) {
    case OPERATION.PLUS:
      return augend + addend;
    case OPERATION.MINUS:
      return augend - addend;
    case OPERATION.MULTIPLE:
      return augend * addend;
    case OPERATION.DIVIDE:
      return Math.floor(augend / addend);
  }
}

export { calculate };
