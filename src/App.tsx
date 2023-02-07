import React, { useCallback, useRef, useState } from 'react';
import DigitButton from './components/DigitButton';
import { operations, DIGITS, OPERATIONS_LIST } from './constants';
import { calculate } from './utils';

function App() {
  const [total, setTotal] = useState<number | null>(null);

  const operatorRef = useRef<(next: number) => number>();
  const inputCountRef = useRef<number>(0);

  const handleOperationClick = (operation: keyof typeof operations) => {
    if (total === null) return;

    if (inputCountRef.current === 0) {
      operatorRef.current = calculate[operation](total);
      return;
    }

    const nextTotalValue = operatorRef.current
      ? Math.floor(operatorRef.current(total))
      : total;

    setTotal(nextTotalValue);
    operatorRef.current = calculate[operation](nextTotalValue);

    inputCountRef.current = 0;
  };

  const handleDigitClick = useCallback((digit: number) => {
    const count = inputCountRef.current;

    setTotal((prevTotal) => {
      if (!prevTotal) return digit;

      if (count === 0) {
        return digit;
      }
      if (count >= 3) return prevTotal;
      return prevTotal * 10 + digit;
    });

    inputCountRef.current = count + 1;
  }, []);

  return (
    <div className="calculator">
      <h1 id="total">
        {Math.abs(total || 0) === Infinity ? '오류' : total || 0}
      </h1>
      <div className="digits flex">
        {DIGITS.map((digit) => (
          <DigitButton key={digit} digit={digit} onClick={handleDigitClick} />
        ))}
      </div>
      <div className="modifiers subgrid">
        <button className="modifier">AC</button>
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
