import React from 'react';
import './css/index.css';

import DigitButtons from './components/DigitButtons';
import OperationButtons from './components/OperationButtons';
import CalculateButton from './components/CalculateButton';
import ResetButton from './components/ResetButton';

import { validateDigit, validateOperation } from './utils/validator';
import useCalculate from './hooks/useCalculate';

function App() {
  const { total, onReset, onButtonClick, onSummaryClick } = useCalculate();

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
        <OperationButtons
          onOperationClick={(e) => onButtonClick(e, validateOperation)}
        />
        <CalculateButton onSummaryClick={onSummaryClick} />
      </div>
    </div>
  );
}

export default App;
