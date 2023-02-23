import React, { useState } from "react";

// Modifiers.js
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

// Digits.js
const Digits = ({ handleDigitClick }) => (
  <div className="digits flex">
    {Array.from({ length: 10 }, (_, i) => (
      <button className="digit" key={i} onClick={() => handleDigitClick(i)}>
        {i}
      </button>
    )).reverse()}
  </div>
);

// Calculator.js
const Calculator = () => {
  const [total, setTotal] = useState("0");

  const handleOperationClick = (operation) => {
    const lastChar = total.charAt(total.length - 1);
    const isLastCharNumber = /[0-9]/.test(lastChar);

    if (isLastCharNumber) {
      setTotal((prevTotal) => prevTotal + operation);
      return;
    }

    const operatorIndex = total.search(/[\+\-\*\/][^0-9]*$/);
    const newTotal = total.slice(0, operatorIndex) + operation;
    setTotal(newTotal);

    if (operation === "=" && newTotal.search(/[\+\-\*\/]/) !== -1) {
      const operands = newTotal.split(/[\+\-\*\/]/);
      const operator = newTotal.match(/[\+\-\*\/]/)[0];

      const operations = {
        "+": (a, b) => Number(a) + Number(b),
        "-": (a, b) => Number(a) - Number(b),
        "*": (a, b) => Number(a) * Number(b),
        "/": (a, b) => Number(a) / Number(b),
      };

      let result = operations[operator]
        ? operations[operator](operands[0], operands[1])
        : NaN;

      if (isNaN(result)) {
        setTotal("Error");
        return;
      }
      setTotal(`${operands[0]}${operator}${operands[1]}=${result}`);
    }
  };

  const handleDigitClick = (i) => {
    if (total === "0") {
      setTotal(i.toString());
      return;
    }

    const lastChar = total.charAt(total.length - 1);
    const isLastCharNumber = /[0-9]/.test(lastChar);
    if (total.length === 3 && isLastCharNumber) return;

    if (total.length >= 7) return;
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
