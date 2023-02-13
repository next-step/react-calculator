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
    setTotal(i);
  };

  return (
    <div id="app">
      <div class="calculator">
        <h1 id="total">{total}</h1>
        <Digits onClickDigit={onClickDigit} />
        <div class="modifiers subgrid">
          <button class="modifier">AC</button>
        </div>
        <div class="operations subgrid">
          <button class="operation">/</button>
          <button class="operation">X</button>
          <button class="operation">-</button>
          <button class="operation">+</button>
          <button className="operation">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
