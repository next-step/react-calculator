import React from "react";
import Digits from "./Digits";
import Modifiers from "./Modifiers";
import Operations from "./Operations";
import useCalculation from "../hooks/useCalculation";

const Calculator = () => {
  const [total, handleDigitClick, handleAllClearClick, handleOperationClick] =
    useCalculation();

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
