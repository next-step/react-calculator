import { useState } from "react";
import CalculatorTotal from "./CalculatorTotal";
import CalculatorDigit from "./CalculatorDigit";
import CalculatorModifier from "./CalculatorModifier";
import CalculatorOperation from "./CalculatorOperation";
import { ContextTotal } from "../context/ContextTotal";

const Calculator = () => {
  const [total, setTotal] = useState("0");

  return (
    <ContextTotal.Provider value={{ total, setTotal }}>
      <div className="calculator">
        <CalculatorTotal />
        <CalculatorDigit />
        <CalculatorModifier />
        <CalculatorOperation />
      </div>
    </ContextTotal.Provider>
  );
};

export default Calculator;
