import { useReducer } from 'react';
import { CalcContext } from './CalcContext';
import { calcReducer, initialState } from './calcReducer';

export const CalcProvider = ({ children }) => {
  const [state, dispatch] = useReducer(calcReducer, initialState);

  const addDigit = (digit) => {
    console.log(state);
    console.log(digit);
  };
  const addOperator = () => {};
  const calculate = () => {};
  const reset = () => {};

  return (
    <CalcContext.Provider
      value={{ ...state, addDigit, addOperator, calculate, reset }}
    >
      {children}
    </CalcContext.Provider>
  );
};
