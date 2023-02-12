import { MouseEvent, useCallback, useState } from 'react';
import { DIGIT_MAX_LENGTH, ZERO } from '../constants';
import { calculate } from '../util';
import { ERROR_MESSAGE } from '../constants/errorMessage';

const initialState = {
  digit: '',
  saveDigit: '',
  operator: '',
};

export const useCalculate = () => {

  const [state, setState] = useState(initialState);

  const addDigits = (event: MouseEvent<HTMLDivElement>) => {
    const { value } = event.target as HTMLButtonElement;

    if (!state.digit && value === ZERO) {
      return;
    }

    if (state.digit.length > DIGIT_MAX_LENGTH) {
      alert(ERROR_MESSAGE.INVALID_NUMBER_MAX_LENGTH);
      return;
    }

    setState(prev => ({
      ...prev,
      digit: prev.digit + value,
    }));
  }

  const operate = (event: MouseEvent<HTMLDivElement>) => {
    const { value } = event.target as HTMLButtonElement;

    if (value === '=') {
      const result = calculate(state);

      setState({
        digit: result.toString(),
        saveDigit: '',
        operator: '',
      });
      return;
    }

    if (state.operator || !state.digit) {
      alert(ERROR_MESSAGE.INVALID_PREV_NUMBER_INPUT);
      return;
    }

    setState(prev => ({
      operator: value,
      saveDigit: prev.digit,
      digit: '',
    }));
    return;
  };

  const clear = useCallback(() => {
    setState(initialState);
  }, []);

  const getTotal = () => {
    const { digit, operator, saveDigit } = state;

    return `${saveDigit}${operator}${digit}`;
  };

  return {
    state,
    addDigits,
    operate,
    clear,
    total: getTotal()
  };
};