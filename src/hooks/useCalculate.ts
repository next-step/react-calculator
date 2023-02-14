import { MouseEvent, useCallback, useState } from 'react';
import { DIGIT_MAX_LENGTH, OPERATIONS } from '../constant';
import { calculate } from '../utils';
import { ERROR_MESSAGE } from '../constant/errorMessage';

const initialState = {
  digit: '',
  saveDigit: '',
  operator: '',
};

export const useCalculate = () => {

  const [state, setState] = useState(initialState);

  const onClickDigit = (event: MouseEvent<HTMLDivElement>) => {
    const { value } = event.target as HTMLButtonElement;

    if (!state.digit && value === '0') {
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

    if (value === OPERATIONS.EQUAL) {
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
    onClickDigit,
    operate,
    clear,
    total: getTotal()
  };
};