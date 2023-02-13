import { useReducer } from 'react';

import {
  ICalculator,
  calculate,
  updateOperation,
  updateOperand,
  updateAccumulator,
  isOperandMaxLength,
} from 'components/Calculator/CalculatorModel';

import { OPERATION, Digit } from 'constants/calculator';
import { ERROR_MESSAGE } from 'constants/message';
import { isInfinity } from 'utils';
import type { ValueOf } from 'types';

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

const initialState: ICalculator = {
  leftOperand: 0,
  rightOperand: null,
  operation: null,
  accumulator: '0',
};

function reducer(state: ICalculator, action: Action) {
  switch (action.type) {
    case ACTION_TYPE.OPERAND:
      return {
        ...state,
        ...updateAccumulator(updateOperand(state, action.payload)),
      };
    case ACTION_TYPE.OPERATION: {
      return {
        ...state,
        ...updateAccumulator(updateOperation(state, action.payload)),
      };
    }
    case ACTION_TYPE.CALCULATE:
      return {
        ...state,
        ...updateAccumulator(calculate(state)),
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
  const { leftOperand, accumulator } = state;

  const total = isInfinity(leftOperand) ? ERROR_MESSAGE.INIFINITY : accumulator;

  const handleClickAllClear = () => {
    dispatch({ type: ACTION_TYPE.CLEAR });
  };

  const handleClickDigit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (isInfinity(leftOperand)) {
      alert(ERROR_MESSAGE.HAVE_TO_ALL_CLEAR);
      return;
    }

    if (isOperandMaxLength(state)) {
      alert(ERROR_MESSAGE.MAX_LENGTH);
      return;
    }

    const digit = e.currentTarget.textContent;
    if (isDigit(digit)) {
      dispatch({ type: ACTION_TYPE.OPERAND, payload: digit });
    }
  };

  const handleClickOperation: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (isInfinity(leftOperand)) {
      alert(ERROR_MESSAGE.HAVE_TO_ALL_CLEAR);
      return;
    }

    const operation = e.currentTarget.textContent;
    if (isOperation(operation)) {
      dispatch({ type: ACTION_TYPE.OPERATION, payload: operation });
      return;
    }

    dispatch({ type: ACTION_TYPE.CALCULATE });
  };

  return {
    calculator: state,
    handleClickDigit,
    handleClickOperation,
    handleClickAllClear,
    total,
  };
};

const isDigit = (arg: any): arg is Digit => arg !== undefined;
const isOperation = (arg: any): arg is Operation => Object.values(OPERATION).includes(arg);

export default useCalculator;
