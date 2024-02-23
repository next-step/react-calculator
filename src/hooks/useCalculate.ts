import { useReducer } from 'react';
import calculate from '../utils/calculate';
import {
  INITIAL_DIGIT,
  INITIAL_VALUE,
  MAX_DIGIT_LENGTH,
  MESSAGES,
} from '../constant/calculator';

type Operands = {
  firstValue: string;
  secondValue: string;
};

type State = {
  operation: string;
  operands: Operands;
};

type Action = {
  type: string;
  payload?: any;
};

const INITIAL_STATE = {
  operation: INITIAL_VALUE,
  operands: {
    firstValue: INITIAL_DIGIT,
    secondValue: INITIAL_VALUE,
  },
};

const ACTION_TYPES = {
  FIRST_CLICK: 'first-click',
  FIRST_DIGITS: 'first-digits',
  SECOND_DIGITS: 'second-digits',
  CALCULATE: 'calculate',
  UPDATE_OPERATION: 'update-operation',
  ALL_CLEAR: 'all-clear',
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ACTION_TYPES.FIRST_CLICK: {
      const digit = action.payload?.digit;
      return {
        ...state,
        operands: {
          ...state.operands,
          firstValue: String(digit),
        },
      };
    }
    case ACTION_TYPES.FIRST_DIGITS: {
      const digit = action.payload.digit;
      return {
        ...state,
        operands: {
          ...state.operands,
          firstValue: state.operands.firstValue + String(digit),
        },
      };
    }

    case ACTION_TYPES.SECOND_DIGITS: {
      const digit = action.payload.digit;
      return {
        ...state,
        operands: {
          ...state.operands,
          secondValue: state.operands.secondValue + String(digit),
        },
      };
    }

    case ACTION_TYPES.CALCULATE: {
      const total = action.payload.total;
      return {
        operation: INITIAL_VALUE,
        operands: {
          firstValue: String(total),
          secondValue: INITIAL_VALUE,
        },
      };
    }

    case 'update-operation': {
      const operation = action.payload.operation;
      return {
        ...state,
        operation,
      };
    }

    case ACTION_TYPES.ALL_CLEAR:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default function useCalculate() {
  const [{ operation, operands }, dispatch] = useReducer(
    reducer,
    INITIAL_STATE
  );

  const handleDigitClick = (digit: number) => {
    if (!operation) {
      if (operands.firstValue === INITIAL_DIGIT) {
        dispatch({ type: ACTION_TYPES.FIRST_CLICK, payload: { digit } });
      } else {
        if (operands.firstValue.length >= MAX_DIGIT_LENGTH) {
          alert(MESSAGES.DIGIT_LIMIT);
          return;
        }

        dispatch({ type: ACTION_TYPES.FIRST_DIGITS, payload: { digit } });
      }
    } else {
      if (operands.secondValue.length >= MAX_DIGIT_LENGTH) {
        alert(MESSAGES.DIGIT_LIMIT);
        return;
      }

      dispatch({ type: ACTION_TYPES.SECOND_DIGITS, payload: { digit } });
    }
  };

  const handleOperationClick = (clickedOperation: string) => {
    if (clickedOperation === '=') {
      if (!operation) return;
      const total = calculate(operation, operands);

      dispatch({ type: ACTION_TYPES.CALCULATE, payload: { total } });
    } else {
      if (operands === INITIAL_STATE.operands) {
        alert(MESSAGES.NUMBER_FIRST);
        return;
      }

      dispatch({
        type: ACTION_TYPES.UPDATE_OPERATION,
        payload: { operation: clickedOperation },
      });
    }
  };

  const handleModifierClick = () => {
    dispatch({ type: ACTION_TYPES.ALL_CLEAR });
  };

  return {
    operands: operands,
    operation: operation,
    handleDigitClick,
    handleOperationClick,
    handleModifierClick,
  };
}
