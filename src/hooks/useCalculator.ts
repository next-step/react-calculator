import { useReducer } from 'react';

import { OPERATION, DIGIT, ERROR_MESSAGE } from 'constant';
import { calculate } from 'utils';
import type { ValueOf } from 'types';

type Digit = ValueOf<typeof DIGIT>;
type Operation = ValueOf<typeof OPERATION>;

const ACTION_TYPE = {
  OPERAND: 'operand',
  OPERATION: 'operation',
  CALCULATE: 'calculate',
  CLEAR: 'clear',
} as const;

type Action =
  | {
      type: typeof ACTION_TYPE.OPERAND;
      payload: Digit;
    }
  | {
      type: typeof ACTION_TYPE.OPERATION;
      payload: Operation;
    }
  | {
      type: typeof ACTION_TYPE.CALCULATE;
    }
  | {
      type: typeof ACTION_TYPE.CLEAR;
    };

interface ICalculator {
  total: number;
  addend: number;
  augend: number;
  accumulator: string;
  operation: Operation | null;
}

const initialState: ICalculator = {
  total: 0,
  addend: 0,
  augend: 0,
  accumulator: '0',
  operation: null,
};

function reducer(state: ICalculator, action: Action) {
  const { operation, addend, augend } = state;

  switch (action.type) {
    case ACTION_TYPE.OPERAND:
      if (!operation) {
        const newAugend = Number('' + augend + action.payload);
        const newAccumulator = String(newAugend);

        return {
          ...state,
          augend: newAugend,
          accumulator: newAccumulator,
        };
      } else {
        const newAddend = Number('' + addend + action.payload);
        const newAccumulator = augend + operation + newAddend;

        return {
          ...state,
          addend: newAddend,
          accumulator: newAccumulator,
        };
      }
    case ACTION_TYPE.OPERATION: {
      const newAccumulator = augend + action.payload;

      return {
        ...state,
        operation: action.payload,
        addend: 0,
        accumulator: newAccumulator,
      };
    }
    case ACTION_TYPE.CALCULATE:
      if (!operation) {
        throw new Error('Missing Operation');
      }

      const total = calculate(augend, addend, operation);
      const isInfinity = total === Infinity;

      return {
        ...state,
        total,
        operation: null,
        augend: isInfinity ? 0 : total,
        addend: 0,
        accumulator: isInfinity ? ERROR_MESSAGE.INIFINITY : String(total),
      };
    case ACTION_TYPE.CLEAR:
      return {
        ...initialState,
      };
    default:
      throw new Error('Unhandled Action type');
  }
}

const useCalculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setOperand = (digit: Digit) => {
    dispatch({ type: ACTION_TYPE.OPERAND, payload: digit });
  };

  const setOperation = (operation: Operation) => {
    dispatch({ type: ACTION_TYPE.OPERATION, payload: operation });
  };

  const calculate = () => {
    dispatch({ type: ACTION_TYPE.CALCULATE });
  };

  const clear = () => {
    dispatch({ type: ACTION_TYPE.CLEAR });
  };

  return {
    calculator: state,
    setOperand,
    setOperation,
    calculate,
    clear,
  };
};

export default useCalculator;
