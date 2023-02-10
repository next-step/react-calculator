import { useState } from 'react';
import type { MouseEvent } from 'react';
import { calculate } from '../libs';
import { VALIDATE_MESSAGE, NUMBER_MAX_LENGTH } from '../constants';

const initialValue = {
  targetNumber: '',
  savedNumber: '',
  operator: '',
};

function useCalculator() {
  const [state, setState] = useState(initialValue);

  const handleDigits = (e: MouseEvent<HTMLDivElement>) => {
    if (state.targetNumber.length > NUMBER_MAX_LENGTH) {
      window.alert(VALIDATE_MESSAGE.NUMBER_MAX_LENGTH);
      return;
    }

    setState(prev => ({
      ...prev,
      targetNumber: prev.targetNumber + (e.target as HTMLButtonElement).value,
    }));
  };

  const handleOperations = (e: MouseEvent<HTMLDivElement>) => {
    const { value } = e.target as HTMLButtonElement;

    if (value === '=') {
      const result = calculate(state);

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
    return `${savedNumber}${operator}${targetNumber}`;
  };

  const handleModifier = () => {
    setState(initialValue);
  };

  return {
    state,
    handleDigits,
    handleOperations,
    handleModifier,
    total: getTotal(),
  };
}

export default useCalculator;
