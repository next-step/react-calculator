import { useState } from 'react';
import { calculate } from '../libs';

const initialValue = {
  targetNumber: '',
  savedNumber: '',
  operator: '',
};

function useCalculator() {
  const [state, setState] = useState(initialValue);
  console.log(state);

  const handleDigits = (e: any) => {
    if (state.targetNumber.length > 2) {
      window.alert('3자리 미만');
      return;
    }

    setState(prev => ({
      ...prev,
      targetNumber: prev.targetNumber + e.target.value,
    }));
  };

  const handleOperations = (e: any) => {
    const { value } = e.target;

    if (value === '=') {
      const result = calculate(state);
      setState({
        targetNumber: result.toString(),
        savedNumber: '',
        operator: '',
      });
      return;
    }

    if (state.operator) {
      window.alert('연산자가 이미 있습니다.');
      return;
    }

    if (!state.targetNumber) {
      window.alert('숫자가 먼저 와야합니다');
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
