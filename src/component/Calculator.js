import CalculatorDigit from "./CalculatorDigit";
import CalculatorOperation from "./CalculatorOperation";
import { DIGITS, OPERATIONS } from "../constant";
import useCalculate from "../hook/useCalculate";

const Calculator = () => {
  const { total, enterDigit, enterOperator, calculateTotal, clear } =
    useCalculate();

  return (
    <div className="calculator">
      <h1 id="total">{total}</h1>

      <div className="digits flex">
        {DIGITS.map((digit) => (
          <CalculatorDigit
            digit={digit}
            key={digit}
            onClick={() => enterDigit(digit)}
          />
        ))}
      </div>

      <div className="modifiers subgrid">
        <button className="modifier" onClick={clear}>
          AC
        </button>
      </div>

      <div className="operations subgrid">
        {OPERATIONS.map((operation, index) => (
          <CalculatorOperation
            operation={operation}
            key={index}
            onClick={() => enterOperator(operation)}
          />
        ))}
        <CalculatorOperation operation={"="} onClick={calculateTotal} />
      </div>
    </div>
  );
};

export default Calculator;
