import CalculatorDigit from "./CalculatorDigit";
import CalculatorOperation from "./CalculatorOperation";
import { DIGITS, OPERATIONS } from "../constant";

const Calculator = () => {
  return (
    <div className="calculator">
      <h1 id="total">0</h1>

      <div className="digits flex">
        {DIGITS.map((digit) => (
          <CalculatorDigit digit={digit} key={digit} />
        ))}
      </div>

      <div className="modifiers subgrid">
        <button className="modifier">AC</button>
      </div>

      <div className="operations subgrid">
        {OPERATIONS.map((operation, index) => (
          <CalculatorOperation operation={operation} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
