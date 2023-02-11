import CalculatorTotal from "./CalculatorTotal";
import CalculatorDigit from "./CalculatorDigit";
import CalculatorModifier from "./CalculatorModifier";
import CalculatorOperation from "./CalculatorOperation";
import { useState } from "react";

const Calculator = () => {
  const [total, setTotal] = useState("0");

  return (
    <div className="calculator">
      <CalculatorTotal total={total} />
      <CalculatorDigit total={total} setTotal={setTotal} />
      <CalculatorModifier />
      <CalculatorOperation total={total} setTotal={setTotal} />
    </div>
  );
};

export default Calculator;
