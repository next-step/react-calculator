import useCalculate from "@/hook/useCalculate";
import CalculateDisplay from "./CalculateDisplay";
import Digit from "./Digit";
import Modifier from "./Modifier";
import Operation from "./Operation";

const Calculrator = () => {
  const {
    handleDigit,
    handleOperation,
    handleCalculate,
    reset,
    calculrateState,
  } = useCalculate();

  return (
    <div className="calculator">
      <CalculateDisplay calculrateState={calculrateState} />
      <Digit onClick={handleDigit} />
      <Modifier onClick={reset} />
      <Operation
        handleOperation={handleOperation}
        handleCalculate={handleCalculate}
      />
    </div>
  );
};

export default Calculrator;
