import React from 'react';
import './css/index.css';

import Calculator from './components/calculator/Calculator';

const App = () => {
  return (
    <Calculator>
      <Calculator.Display />
      <Calculator.Reset />
      <Calculator.Digits />
      <Calculator.Operations />
    </Calculator>
  );
};

export default App;
