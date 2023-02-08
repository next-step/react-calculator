import { useReducer } from 'react';

import { type Operators } from '../components/Calculator/Operation/Operation.js';
import {
  calculatorReducer,
  initialState,
  ZERO_VALUE,
} from '../reducer/index.js';

const MAX_NUMBER_LENGTH = 3 as const;

export const useCalculator = () => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const appendDigit = (digit: string) => {
    if (state.value.length >= MAX_NUMBER_LENGTH) {
      alert(`숫자는 ${MAX_NUMBER_LENGTH}자리까지만 입력 가능합니다!`);
      return;
    }
    if (state.value === ZERO_VALUE) {
      dispatch({ type: 'SET_VALUE', payload: digit });
      return;
    }

    dispatch({ type: 'APPEND_VALUE', payload: digit });
  };

  const appendOperator = (operator: Operators) => {
    if (state.value !== ZERO_VALUE) {
      dispatch({ type: 'SET_OPERATOR', payload: operator });
      return;
    }

    if (state.operator === '-') {
      dispatch({ type: 'SET_OPERATOR', payload: operator });
      return;
    }

    alert('숫자를 먼저 입력한 후 연산자를 입력해주세요!');
    return;
  };

  const calculate = () => {
    dispatch({ type: 'CALCULATE' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return { appendDigit, appendOperator, calculate, reset, state };
};
