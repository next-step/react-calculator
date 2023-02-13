import Digits from "../components/Digits";
import Modifier from "../components/Modifier";
import Operations from "../components/Operations";
import Total from "../components/Total";
import { useCalculator } from "../hooks";

function Calculator() {
  const { total, handleDigits, handleModifier, handleOperations } =
    useCalculator();

  return (
    <div className="calculator">
      <Total total={total} />
      <Digits handleDigits={handleDigits} />
      <Modifier handleModifier={handleModifier} />
      <Operations handleOperations={handleOperations} />
    </div>
  );
}

export default Calculator;
