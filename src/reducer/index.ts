import {
  ADD,
  DIVIDE,
  MULTIPLY,
  Operators,
  SUBTRACT,
} from '../components/Calculator/Operation/Operation';

export type CalculatorState = {
  value: string;
  prevValue: string;
  operator: string;
};

export const ZERO_VALUE = '0';

export const initialState: CalculatorState = {
  value: ZERO_VALUE,
  prevValue: '',
  operator: '',
};

export const SET_VALUE = 'SET_VALUE';
export const APPEND_VALUE = 'APPEND_VALUE';
export const SET_OPERATOR = 'SET_OPERATOR';
export const SET_MINUS_OPERATOR = 'SET_MINUS_OPERATOR';
export const CALCULATE = 'CALCULATE';
export const RESET = 'RESET';

type CalculatorActions =
  | { type: typeof SET_VALUE; payload: string }
  | { type: typeof APPEND_VALUE; payload: string }
  | { type: typeof SET_OPERATOR; payload: string }
  | { type: typeof SET_MINUS_OPERATOR }
  | { type: typeof CALCULATE }
  | { type: typeof RESET };

export const calculatorReducer = (
  state: CalculatorState,
  action: CalculatorActions
) => {
  switch (action.type) {
    case SET_VALUE:
      return { ...state, value: action.payload };
    case APPEND_VALUE:
      return { ...state, value: state.value + action.payload };
    case SET_OPERATOR:
      return {
        ...state,
        prevValue: state.value,
        value: '',
        operator: action.payload,
      };
    case SET_MINUS_OPERATOR:
      return {
        ...state,
        value: SUBTRACT,
      };
    case CALCULATE: {
      const prev = +state.prevValue;
      const current = +state.value;

      return {
        ...state,
        prevValue: '',
        value: performOperation(prev, current, state.operator as Operators),
        operator: '',
      };
    }
    case RESET:
      return initialState;
    default:
      return state;
  }
};

const performOperation = (
  prevValue: number,
  value: number,
  operator: Operators
) => {
  switch (operator) {
    case ADD:
      return (prevValue + value).toString();
    case SUBTRACT:
      return (prevValue - value).toString();
    case MULTIPLY:
      return (prevValue * value).toString();
    case DIVIDE:
      return Math.floor(prevValue / value).toString();
    default:
      return value.toString();
  }
};
