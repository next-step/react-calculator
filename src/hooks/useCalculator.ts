import { useState } from 'react';
import type { MouseEvent } from 'react';
import { calculate } from '../libs';
import { VALIDATE_MESSAGE, NUMBER_MAX_LENGTH } from '../constants';

const initialState = {
  targetNumber: '',
  savedNumber: '',
  operator: '',
};

const initialError = {
  isError: false,
  msg: '',
};

type CalculateError = { isError: boolean; msg: string };

function useCalculator() {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState<CalculateError>(initialError);

  const handleDigits = (e: MouseEvent<HTMLDivElement>) => {
    const { value } = e.target as HTMLButtonElement;

    if (!state.targetNumber && value === '0') {
      return;
    }

    if (state.targetNumber.length > NUMBER_MAX_LENGTH) {
      window.alert(VALIDATE_MESSAGE.NUMBER_MAX_LENGTH);
      return;
    }

    setState(prev => ({
      ...prev,
      targetNumber: prev.targetNumber + value,
    }));
  };

  const handleOperations = (e: MouseEvent<HTMLDivElement>) => {
    const { value } = e.target as HTMLButtonElement;

    if (value === '=') {
      const result = calculate(state);

      if (!isFinite(result)) {
        setError({
          isError: true,
          msg: VALIDATE_MESSAGE.NUMBER_INFINITY,
        });
      }

      setState({
        targetNumber: result.toString(),
        savedNumber: '',
        operator: '',
      });
      return;
    }

    if (state.operator || !state.targetNumber) {
      window.alert(VALIDATE_MESSAGE.ENTER_NUMBER_BEFORE_OPERATOR);
      return;
    }

    setState(prev => ({
      operator: value,
      savedNumber: prev.targetNumber,
      targetNumber: '',
    }));
  };

  const getTotal = () => {
    const { targetNumber, operator, savedNumber } = state;

    return error.isError ? error.msg : `${savedNumber}${operator}${targetNumber}`;
  };

  const handleModifier = () => {
    setState(initialState);
    setError(initialError);
  };

  return {
    state,
    handleDigits,
    handleOperations,
    handleModifier,
    total: getTotal(),
    error,
  };
}

export default useCalculator;
