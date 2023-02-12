import React, { useContext } from 'react';
import { CalculatorContext } from './Calculator';

const Display = () => {
  const { total, currentNumber } = useContext(CalculatorContext);
  return (
    <div className="display">
      <p>{total}</p>
      <h1>{currentNumber || '0'}</h1>
    </div>
  );
};

export default Display;
