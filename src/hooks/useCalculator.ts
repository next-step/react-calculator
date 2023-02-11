import { useReducer } from 'react';

import { type DigitNumbers } from '../components/Calculator/Digit/Digit';
import {
  type Operators,
  type Subtract,
} from '../components/Calculator/Operation/Operation';
import {
  APPEND_VALUE,
  CALCULATE,
  calculatorReducer,
  initialState,
  RESET,
  SET_MINUS_OPERATOR,
  SET_OPERATOR,
  SET_VALUE,
  ZERO_VALUE,
} from '../reducer';

const MAX_NUMBER_LENGTH = 3;
const MINUS: Subtract = '-';

export const useCalculator = () => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const appendDigit = (digit: DigitNumbers) => {
    if (isNumberRange(state.value)) {
      alert(`숫자는 ${MAX_NUMBER_LENGTH}자리까지만 입력 가능합니다!`);
      return;
    }

    const isZero = state.value === ZERO_VALUE;
    dispatch({
      type: isZero ? SET_VALUE : APPEND_VALUE,
      payload: digit,
    });
  };

  const appendOperator = (operator: Operators) => {
    if (
      state.value !== ZERO_VALUE &&
      state.value !== MINUS &&
      state.prevValue === initialState.prevValue
    ) {
      dispatch({ type: SET_OPERATOR, payload: operator });
      return;
    }

    if (operator === MINUS) {
      dispatch({ type: SET_MINUS_OPERATOR });
      return;
    }

    alert('숫자를 먼저 입력한 후 연산자를 입력해주세요!');
    return;
  };

  const calculate = () => {
    dispatch({ type: CALCULATE });
  };

  const reset = () => {
    dispatch({ type: RESET });
  };

  return { appendDigit, appendOperator, calculate, reset, state } as const;
};

const isNumberRange = (value: string) => {
  return (
    (value.length >= MAX_NUMBER_LENGTH && !value.includes(MINUS)) ||
    (value.length >= MAX_NUMBER_LENGTH + 1 && value.includes(MINUS))
  );
};
