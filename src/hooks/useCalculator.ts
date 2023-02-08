import { useReducer } from 'react';

import { type DigitNumbers } from '../components/Calculator/Digit/Digit.js';
import {
  type Operators,
  type Subtract,
} from '../components/Calculator/Operation/Operation.js';
import {
  type CalculatorState,
  calculatorReducer,
  initialState,
  ZERO_VALUE,
} from '../reducer/index.js';

const MAX_NUMBER_LENGTH = 3 as const;

export interface CalculatorReturnType {
  appendDigit: (digit: DigitNumbers) => void;
  appendOperator: (operator: Operators) => void;
  calculate: () => void;
  reset: () => void;
  state: CalculatorState;
}

const MINUS: Subtract = '-';

export const useCalculator = (): CalculatorReturnType => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const appendDigit = (digit: DigitNumbers) => {
    if (
      (state.value.length >= MAX_NUMBER_LENGTH &&
        !state.value.includes(MINUS)) ||
      (state.value.length >= MAX_NUMBER_LENGTH + 1 &&
        state.value.includes(MINUS))
    ) {
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
    if (
      state.value !== ZERO_VALUE &&
      state.value !== MINUS &&
      state.prevValue === ''
    ) {
      dispatch({ type: 'SET_OPERATOR', payload: operator });
      return;
    }

    if (operator === MINUS) {
      dispatch({ type: 'SET_MINUS_OPERATOR' });
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
