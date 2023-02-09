import { useReducer } from 'react';
import { CalcContext } from './CalcContext';
import { calcReducer, initialState, INITIAL_VALUE } from './calcReducer';

const OPERATOR_REGEX = /[+]|[-]|[X]|[/]/gi;
const NUM_REGEX = /[0-9]/gi;
export const CalcProvider = ({ children }) => {
  const [state, dispatch] = useReducer(calcReducer, initialState);

  const addDigit = (digit) => {
    if (state.total === INITIAL_VALUE) {
      dispatch({ type: 'SET_VALUE', payload: digit });
      return;
    }

    dispatch({ type: 'ADD_VALUE', payload: digit });
  };
  const addOperator = (operator) => {
    dispatch({ type: 'ADD_OPERATOR', operator });
  };

  const calculate = () => {
    const [num1, num2] = state.total
      .replace(OPERATOR_REGEX, ',')
      .split(',')
      .map(Number);
    const operator = state.operator;
    let result = 0;

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case 'X':
        result = num1 * num2;
        break;
      case '/':
        result = Math.trunc(num1 / num2);
        break;
      default:
        throw new Error('Invalid Operator type');
    }

    dispatch({ type: 'CALCULATE', payload: String(result) });
  };
  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <CalcContext.Provider
      value={{ ...state, addDigit, addOperator, calculate, reset }}
    >
      {children}
    </CalcContext.Provider>
  );
};
