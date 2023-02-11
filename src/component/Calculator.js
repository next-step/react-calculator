import CalculatorTotal from "./CalculatorTotal";
import CalculatorDigit from "./CalculatorDigit";
import CalculatorModifier from "./CalculatorModifier";
import CalculatorOperation from "./CalculatorOperation";

const Calculator = () => {
  return (
    <div className="calculator">
      <CalculatorTotal />
      <CalculatorDigit />
      <CalculatorModifier />
      <CalculatorOperation />
    </div>
  );
};

export default Calculator;
