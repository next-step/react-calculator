import React from 'react';

import Button from './@common/Button';
import { DIGITS, OPERATORS } from '../constants/calculate';

const Calculator = () => {
  const total = 0;

  return (
    <div className="calculator">
      <div className="display">
        <p>12+3</p>
        <h1>{total || '0'}</h1>
      </div>
      <div className="digits flex">
        {DIGITS.map((digit) => (
          <Button key={digit} className="digit">
            {digit}
          </Button>
        ))}
      </div>
      <div className="modifiers subgrid">
        <Button className="modifier">AC</Button>
      </div>
      <div className="operations subgrid">
        {OPERATORS.map((operator) => (
          <Button key={operator} className="operation">
            {operator}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
