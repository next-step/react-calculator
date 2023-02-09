import React, { useState } from 'react';

import { separateCalculateUnits } from '../utils/separateCalculateUnits';
import { operations, OperationType } from '../utils/operations';

const useCalculate = () => {
  const [total, setTotal] = useState('');

  const onReset = () => {
    setTotal('');
  };

  const onButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    validateCallback: (total: string) => void,
  ) => {
    validateCallback(total);
    const { textContent } = e.target as HTMLButtonElement;
    setTotal((prev) => prev + textContent);
  };

  const onSummaryClick = () => {
    const units = separateCalculateUnits(total);
    if (!units) return;

    let sum;
    for (let i = 1; i < units.length; i += 2) {
      if (i === 1) {
        sum = operations[units[i] as OperationType](Number(units[i - 1]), Number(units[i + 1]));
      } else {
        sum = operations[units[i] as OperationType](sum || 0, Number(units[i + 1]));
      }
    }
    setTotal(sum === Infinity ? '오류' : `${sum}`);
  };

  return {
    total,
    onReset,
    onButtonClick,
    onSummaryClick,
  };
};

export default useCalculate;
