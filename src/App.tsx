import React from 'react';

import DigitButton from './components/DigitButton';
import { DIGITS, ERROR_TEXT, OPERATIONS } from './constants';
import { useCalculate } from './hooks';
import OperationButton from './components/OperationButton';

function App() {
  const { result, handleInput, clear } = useCalculate();

  const isRange = (value: number) => {
    return value < Number.MAX_SAFE_INTEGER && value > Number.MIN_SAFE_INTEGER;
  };

  return (
    <div className="calculator">
      <h1 id="total">{isRange(result) ? result : ERROR_TEXT}</h1>
      <div className="digits flex">
        {DIGITS.map((digit) => (
          <DigitButton key={digit} digit={digit} onClick={handleInput} />
        ))}
      </div>
      <div className="modifiers subgrid">
        <button className="modifier" onClick={clear}>
          AC
        </button>
      </div>
      <div className="operations subgrid">
        {OPERATIONS.map((operation) => (
          <OperationButton
            key={operation}
            operation={operation}
            onClick={handleInput}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
