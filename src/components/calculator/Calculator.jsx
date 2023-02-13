import React, { useState } from 'react';

import Button from '../common/Button';

import useExpression from '../../hooks/useExpression';

import { DIGITS } from '../../constants/digits';
import { OPERATIONS } from '../../constants/operations';
import { ERROR_TEXT } from '../../constants/error';

export const ALL_CLEAR = 'AC';

const Calculator = () => {
  const [totalText, setTotalText] = useState(0);
  const [writeExpression, calculateExpression, resetExpression] = useExpression();

  const handleTextInsert = (event) => {
    const buttonValue = event.target.value;

    const addText = writeExpression(buttonValue, totalText);

    setTotalText(totalText === DIGITS.ZERO || totalText === ERROR_TEXT ? addText : totalText + addText);
  };

  const handleCalculate = () => {
    const result = calculateExpression();

    setTotalText(result === Infinity ? ERROR_TEXT : result);
  };

  const handleAllClear = () => {
    setTotalText(resetExpression());
  };

  return (
    <div className="calculator">
      <h1 id="total">{totalText}</h1>
      <div className="digits flex">
        {Object.values(DIGITS).map((digit) => (
          <Button key={digit} className="digit" value={digit} onClick={handleTextInsert}>
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
            <Button key={operation} className="operation" value={operation} onClick={handleTextInsert}>
              {operation}
            </Button>
          ),
        )}
      </div>
    </div>
  );
};

export default Calculator;
