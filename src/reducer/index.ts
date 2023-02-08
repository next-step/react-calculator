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
    case 'CALCULATE': {
      const prev = +state.prevValue;
      const current = +state.value;

      switch (state.operator) {
        case '+':
          return {
            ...state,
            prevValue: '',
            value: (prev + current).toString(),
            operator: '',
          };
        case '-':
          return {
            ...state,
            prevValue: '',
            value: (prev - current).toString(),
            operator: '',
          };
        case 'X':
          return {
            ...state,
            prevValue: '',
            value: (prev * current).toString(),
            operator: '',
          };
        case '/':
          return {
            ...state,
            prevValue: '',
            value: Math.floor(prev / current).toString(),
            operator: '',
          };
        default:
          return state;
      }
    }
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};
