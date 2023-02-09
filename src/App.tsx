import React from 'react';

import DigitButton from './components/DigitButton';
import { operations, DIGITS, OPERATIONS_LIST } from './constants';
import { useCalculate } from './hooks';

function App() {
  const { total, operate, insertDigit, clear } = useCalculate();

  const isRange = (value: number) => {
    return value < Number.MAX_SAFE_INTEGER && value > Number.MIN_SAFE_INTEGER;
  };

  return (
    <div className="calculator">
      <h1 id="total">{isRange(total) ? total : '오류'}</h1>
      <div className="digits flex">
        {DIGITS.map((digit) => (
          <DigitButton key={digit} digit={digit} insertDigit={insertDigit} />
        ))}
      </div>
      <div className="modifiers subgrid">
        <button className="modifier" onClick={clear}>
          AC
        </button>
      </div>
      <div className="operations subgrid">
        {OPERATIONS_LIST.map((operation) => (
          <button
            key={operation}
            className="operation"
            onClick={() => operate(operation)}
          >
            {operations[operation]}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
