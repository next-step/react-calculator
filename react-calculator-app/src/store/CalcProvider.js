import { useReducer } from 'react';
import { CalcContext } from './CalcContext';
import { calcReducer, initialState, INITIAL_VALUE } from './calcReducer';
import { MIN_DIGIT_LENGTH } from '../constants/numbers';

const OPERATOR_REGEX = /[+]|[-]|[X]|[/]/gi;

export const CalcProvider = ({ children }) => {
  const [state, dispatch] = useReducer(calcReducer, initialState);

  const addDigit = (digit) => {
    if (state.currentNum.length > MIN_DIGIT_LENGTH) {
      alert('3자리까지 입력가능합니다.');
      return;
    }

    dispatch({ type: 'ADD_CURRENT_NUM', payload: digit });

    if (state.total === INITIAL_VALUE) {
      dispatch({ type: 'SET_VALUE', payload: digit });
      return;
    }

    dispatch({ type: 'ADD_VALUE', payload: digit });
  };
  const addOperator = (operator) => {
    dispatch({ type: 'ADD_OPERATOR', operator });
    dispatch({ type: 'SET_CURRENT_NUM', payload: '' });
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

    if (result === Infinity) {
      alert('오류');
      return;
    }

    dispatch({ type: 'CALCULATE', payload: String(result) });
    dispatch({ type: 'SET_CURRENT_NUM', payload: '' });
  };
  const reset = () => {
    dispatch({ type: 'RESET' });
    dispatch({ type: 'SET_CURRENT_NUM', payload: '' });
  };

  return (
    <CalcContext.Provider
      value={{ ...state, addDigit, addOperator, calculate, reset }}
    >
      {children}
    </CalcContext.Provider>
  );
};
