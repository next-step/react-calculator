import React from 'react';

import Button from '../common/Button';

import useExpression from '../../hooks/useExpression';

import { DIGITS } from '../../constants/digits';
import { OPERATIONS } from '../../constants/operations';

export const ALL_CLEAR = 'AC';

const Calculator = () => {
  const [totalText, handleExpressionWrite, handleCalculate, handleAllClear] = useExpression();

  return (
    <div className="calculator">
      <h1 id="total">{totalText}</h1>
      <div className="digits flex">
        {Object.values(DIGITS).map((digit) => (
          <Button key={digit} className="digit" value={digit} onClick={handleExpressionWrite}>
            {digit}
          </Button>
        ))}
      </div>
      <div className="modifiers subgrid">
        <Button className="modifier" value={ALL_CLEAR} onClick={handleAllClear}>
          {ALL_CLEAR}
        </Button>
      </div>
      <div className="operations subgrid">
        {Object.values(OPERATIONS).map((operation) =>
          operation === OPERATIONS.EQUALS ? (
            <Button key={operation} className="operation" value={operation} onClick={handleCalculate}>
              {operation}
            </Button>
          ) : (
            <Button key={operation} className="operation" value={operation} onClick={handleExpressionWrite}>
              {operation}
            </Button>
          ),
        )}
      </div>
    </div>
  );
};

export default Calculator;
