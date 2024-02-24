import React from 'react';

import AllClear from './components/AllClear';
import Display from './components/Display';
import NumberPad from './components/NumberPad';
import Operators from './components/Operators';
import useCalculator from './hooks/useCalculator';

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
      <Display view={view} />
      <NumberPad handleNumberClick={handleNumberClick} />
      <AllClear resetCalculator={resetCalculator} />
      <Operators
        handleOperatorClick={handleOperatorClick}
        calculateResult={calculateResult}
      />
    </div>
  );
}
