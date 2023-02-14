import React, { useState } from "react";

const Modifiers = ({ handleAllClearClick }) => (
  <div className="modifiers subgrid">
    <button className="modifier" onClick={() => handleAllClearClick()}>
      AC
    </button>
  </div>
);

// Operations.js
const operations = ["/", "X", "-", "+", "="];

const Operations = ({ handleOperationClick }) => (
  <div className="operations subgrid">
    {operations.map((operation) => (
      <button
        className="operation"
        onClick={() => handleOperationClick(operation)}
        key={operation}
      >
        {operation}
      </button>
    ))}
  </div>
);

const Digits = ({ handleDigitClick }) => (
  <div className="digits flex">
    {Array.from({ length: 10 }, (_, i) => (
      <button className="digit" key={i} onClick={() => handleDigitClick(i)}>
        {i}
      </button>
    )).reverse()}
  </div>
);

const Calculator = () => {
  const [total, setTotal] = useState("0");

  const handleOperationClick = (operation) => {
    const lastChar = total.charAt(total.length - 1);
    if (/[0-9]/.test(lastChar)) {
      setTotal((prevTotal) => prevTotal + operation);
    }
  };

  const handleDigitClick = (i) => {
    if (total === "0") {
      setTotal(i.toString());
      return;
    }

    if (total.length >= 3) return;

    setTotal((prevTotal) => prevTotal + i.toString());
  };

  const handleAllClearClick = () => {
    setTotal("0");
  };

  return (
    <div id="app">
      <div className="calculator">
        <h1 id="total">{total}</h1>
        <Digits handleDigitClick={handleDigitClick} />
        <Modifiers handleAllClearClick={handleAllClearClick} />
        <Operations handleOperationClick={handleOperationClick} />
      </div>
    </div>
  );
};

export default Calculator;
