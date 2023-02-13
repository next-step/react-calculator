import React, { useState } from "react";

const Calculator = () => {
  const [total, setTotal] = useState(0);

  const Digits = ({ onClickDigit }) => (
    <div className="digits flex">
      {Array.from({ length: 10 }, (_, i) => (
        <button className="digit" key={i} onClick={() => onClickDigit(i)}>
          {i}
        </button>
      )).reverse()}
    </div>
  );

  const onClickDigit = (i) => {
    if (total === 0) {
      setTotal(i.toString());
      return;
    }

    setTotal((prevTotal) => prevTotal + i.toString());
  };

  return (
    <div id="app">
      <div className="calculator">
        <h1 id="total">{total}</h1>
        <Digits onClickDigit={onClickDigit} />
        <div className="modifiers subgrid">
          <button className="modifier">AC</button>
        </div>
        <div className="operations subgrid">
          <button className="operation">/</button>
          <button className="operation">X</button>
          <button className="operation">-</button>
          <button className="operation">+</button>
          <button className="operation">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
