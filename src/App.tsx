import React from 'react';

import { NUMBERS, OPERATORS } from './constants/calculator';
import useCalculator from './hooks/useCalculator';

export type Operator = '/' | 'X' | '+' | '-';

export default function App() {
  const {
    handleNumberClick,
    handleOperatorClick,
    calculateResult,
    resetCalculator,
    view,
  } = useCalculator();

  return (
    <div className="calculator">
      <h1 id="total">{view}</h1>
      <div className="digits flex">
        {NUMBERS.map((number) => (
          <button key={number} onClick={() => handleNumberClick(number)}>
            {number}
          </button>
        ))}
      </div>
      <div className="modifiers subgrid">
        <button onClick={resetCalculator}>AC</button>
      </div>
      <div className="operations subgrid">
        {OPERATORS.map((operator) => (
          <button key={operator} onClick={() => handleOperatorClick(operator)}>
            {operator}
          </button>
        ))}
        <button onClick={calculateResult}>=</button>
      </div>
    </div>
  );
}
