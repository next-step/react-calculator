import React, { useState } from 'react';
import './css/index.css';

import DigitButtons from './components/DigitButtons';
import OperationButtons from './components/OperationButtons';
import CalculateButton from './components/CalculateButton';
import ResetButton from './components/ResetButton';

import { separateCalculateUnits } from './utils/separateCalculateUnits';
import { validateDigit, validateOperation } from './utils/validator';

const excute = {
  '+': (a: number, b: number) => a + b,
  '-': (a: number, b: number) => a - b,
  X: (a: number, b: number) => a * b,
  '/': (a: number, b: number) => Math.floor(a / b),
};
type ExecuteType = keyof typeof excute;

function App() {
  const [total, setTotal] = useState('');

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
        sum = excute[units[i] as ExecuteType](Number(units[i - 1]), Number(units[i + 1]));
      } else {
        sum = excute[units[i] as ExecuteType](sum || 0, Number(units[i + 1]));
      }
    }
    if (sum === Infinity) {
      setTotal('오류');
      return;
    }
    setTotal(`${sum}`);
    return;
  };

  const onReset = () => {
    setTotal('');
  };

  return (
    <div className="calculator">
      <h1 id="total">{total || '0'}</h1>
      <div className="digits flex">
        <DigitButtons onDigitClick={(e) => onButtonClick(e, validateDigit)} />
      </div>
      <div className="modifiers subgrid">
        <ResetButton onReset={onReset} />
      </div>
      <div className="operations subgrid">
        <OperationButtons onOperationClick={(e) => onButtonClick(e, validateOperation)} />
        <CalculateButton onSummaryClick={onSummaryClick} />
      </div>
    </div>
  );
}

export default App;
