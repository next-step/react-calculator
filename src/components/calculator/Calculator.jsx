import React, { useState } from 'react';
import Button from '../common/Button';

const Calculator = () => {
  const [totalText, setTotalText] = useState('');

  const handleTextInsert = (event) => {
    const buttonValue = event.target.value;
    setTotalText(totalText + buttonValue);
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
        <Button className="modifier" value="AC" onClick={handleTextInsert} />
      </div>
      <div className="operations subgrid">
        <Button className="operation" value="/" onClick={handleTextInsert} />
        <Button className="operation" value="X" onClick={handleTextInsert} />
        <Button className="operation" value="-" onClick={handleTextInsert} />
        <Button className="operation" value="+" onClick={handleTextInsert} />
        <Button className="operation" value="=" onClick={handleTextInsert} />
      </div>
    </div>
  );
};

export default Calculator;
