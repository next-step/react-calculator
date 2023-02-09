export const INITIAL_VALUE = '0';

export const initialState = {
  total: INITIAL_VALUE,
  currentNum: '',
  operator: '',
};

export const calcReducer = (state, action) => {
  switch (action.type) {
    case 'SET_VALUE':
      return { ...state, total: action.payload };
    case 'SET_CURRENT_NUM':
      return { ...state, currentNum: '' };
    case 'ADD_CURRENT_NUM':
      return { ...state, currentNum: state.currentNum + action.payload };
    case 'ADD_VALUE':
      return { ...state, total: state.total + action.payload };
    case 'ADD_OPERATOR':
      return {
        ...state,
        total: state.total + action.operator,
        operator: action.operator,
      };
    case 'CALCULATE':
      return { ...state, total: action.payload };
    case 'RESET':
      return initialState;
    default:
      throw new Error('Unhandled Calc action type');
  }
};
