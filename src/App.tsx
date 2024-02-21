import CalculatorResult from "components/CalculatorResult";
import DigitButtons from "components/DigitButtons";
import ModifyButton from "components/ModifyButton";
import OperatorButtons from "components/OperatorButtons";

export default function App() {
  return (
    <div className="calculator">
      <CalculatorResult />
      <DigitButtons />
      <ModifyButton />
      <OperatorButtons />
    </div>
  );
}
