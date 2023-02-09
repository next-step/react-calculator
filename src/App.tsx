import React from 'react';

import DigitButton from './components/DigitButton';
import { operations, DIGITS, OPERATIONS_LIST } from './constants';
import { useCalculate } from './hooks';

function App() {
  const { total, handleClearClick, handleDigitClick, handleOperationClick } =
    useCalculate();

  const isRange = (value: number) => {
    return value < Number.MAX_SAFE_INTEGER && value > Number.MIN_SAFE_INTEGER;
  };

  const totalNumber = total === null ? 0 : total;

  return (
    <div className="calculator">
      <h1 id="total">{isRange(totalNumber) ? '오류' : totalNumber}</h1>
      <div className="digits flex">
        {DIGITS.map((digit) => (
          <DigitButton key={digit} digit={digit} onClick={handleDigitClick} />
        ))}
      </div>
      <div className="modifiers subgrid">
        <button className="modifier" onClick={handleClearClick}>
          AC
        </button>
      </div>
      <div className="operations subgrid">
        {OPERATIONS_LIST.map((operation) => (
          <button
            key={operation}
            className="operation"
            onClick={() => handleOperationClick(operation)}
          >
            {operations[operation]}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
