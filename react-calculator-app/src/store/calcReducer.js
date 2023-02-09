export const INITIAL_VALUE = '0';

export const initialState = {
  value: INITIAL_VALUE,
  prevValue: '',
  operator: '',
};

export const calcReducer = (state, action) => {
  switch (action.type) {
    case 'SET_VALUE':
      return { ...state, value: action.payload };
    case 'ADD_VALUE':
      return { ...state, value: state.value + action.payload };
    case 'SET_OPERATION':
      return { ...state, value: state.value + action.payload };
    case 'CALCULATE':
      return action.result;
    case 'RESET':
      return initialState;
    default:
      throw new Error('Unhandled Calc action type');
  }
};
