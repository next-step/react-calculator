import React, { useState } from 'react';

import Button from '../common/Button';

import useExpression from '../../hooks/useExpression';

import { ERROR_TEXT } from '../../constants/error';

const Calculator = () => {
  const [totalText, setTotalText] = useState('0');
  const [writeExpression, calculateExpression, ResetExpression] = useExpression();

  const handleTextInsert = (event) => {
    const buttonValue = event.target.value;

    const addText = writeExpression(buttonValue, totalText);

    setTotalText(totalText === '0' || totalText === ERROR_TEXT ? addText : totalText + addText);
  };

  const handleCalculate = () => {
    const result = calculateExpression();

    setTotalText(result === Infinity ? ERROR_TEXT : result);
  };

  const handleAllClear = () => {
    setTotalText(ResetExpression());
  };

  return (
    <div className="calculator">
      <h1 id="total">{totalText}</h1>
      <div className="digits flex">
        <Button className="digit" value="9" onClick={handleTextInsert} />
        <Button className="digit" value="8" onClick={handleTextInsert} />
        <Button className="digit" value="7" onClick={handleTextInsert} />
        <Button className="digit" value="6" onClick={handleTextInsert} />
        <Button className="digit" value="5" onClick={handleTextInsert} />
        <Button className="digit" value="4" onClick={handleTextInsert} />
        <Button className="digit" value="3" onClick={handleTextInsert} />
        <Button className="digit" value="2" onClick={handleTextInsert} />
        <Button className="digit" value="1" onClick={handleTextInsert} />
        <Button className="digit" value="0" onClick={handleTextInsert} />
      </div>
      <div className="modifiers subgrid">
        <Button className="modifier" value="AC" onClick={handleAllClear} />
      </div>
      <div className="operations subgrid">
        <Button className="operation" value="/" onClick={handleTextInsert} />
        <Button className="operation" value="X" onClick={handleTextInsert} />
        <Button className="operation" value="-" onClick={handleTextInsert} />
        <Button className="operation" value="+" onClick={handleTextInsert} />
        <Button className="operation" value="=" onClick={handleCalculate} />
      </div>
    </div>
  );
};

export default Calculator;
