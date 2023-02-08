export type CalculatorState = {
  value: string;
  prevValue: string;
  operator: string;
};

export const ZERO_VALUE = '0' as const;

export const initialState: CalculatorState = {
  value: ZERO_VALUE,
  prevValue: '',
  operator: '',
};

type CalculatorActions =
  | { type: 'SET_VALUE'; payload: string }
  | { type: 'APPEND_VALUE'; payload: string }
  | { type: 'SET_OPERATOR'; payload: string }
  | { type: 'SET_MINUS_OPERATOR' }
  | { type: 'CALCULATE' }
  | { type: 'RESET' };

export const calculatorReducer = (
  state: CalculatorState,
  action: CalculatorActions
) => {
  switch (action.type) {
    case 'SET_VALUE':
      return { ...state, value: action.payload };
    case 'APPEND_VALUE':
      return { ...state, value: state.value + action.payload };
    case 'SET_OPERATOR':
      return {
        ...state,
        prevValue: state.value,
        value: '',
        operator: action.payload,
      };
    case 'SET_MINUS_OPERATOR':
      return {
        ...state,
        value: '-',
      };
    case 'CALCULATE': {
      const prev = +state.prevValue;
      const current = +state.value;

      return {
        ...state,
        prevValue: '',
        value: performOperation(prev, current, state.operator),
        operator: '',
      };
    }
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const performOperation = (
  prevValue: number,
  value: number,
  operator: string
) => {
  switch (operator) {
    case '+':
      return (prevValue + value).toString();
    case '-':
      return (prevValue - value).toString();
    case 'X':
      return (prevValue * value).toString();
    case '/':
      return Math.floor(prevValue / value).toString();
    default:
      return value.toString();
  }
};
