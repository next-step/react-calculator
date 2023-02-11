import { useState } from "react";
import CalculatorTotal from "./CalculatorTotal";
import CalculatorDigit from "./CalculatorDigit";
import CalculatorModifier from "./CalculatorModifier";
import CalculatorOperation from "./CalculatorOperation";

const Calculator = () => {
  const [total, setTotal] = useState("0");
  const [count, setCount] = useState(0);

  return (
    <div className="calculator">
      <CalculatorTotal total={total} />
      <CalculatorDigit
        totalState={{ total, setTotal }}
        countState={{ count, setCount }}
      />
      <CalculatorModifier setTotal={setTotal} />
      <CalculatorOperation totalState={{ total, setTotal }} />
    </div>
  );
};

export default Calculator;
