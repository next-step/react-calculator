import { useReducer } from "react";

import {
  CALCULATOR_ACTIONS,
  calculatorReducer,
  initialCalculatorState,
} from "context/calculator.reducer";

import CalculatorDisplay from "components/display/CalculatorDisplay";
import DigitButtons from "components/digit/DigitButtons";
import ModifyButton from "components/modify/ModifyButton";
import OperatorButtons from "components/operator/OperatorButtons";

export default function App() {
  const [calculatorState, setCalculatorState] = useReducer(
    calculatorReducer,
    initialCalculatorState
  );

  const { display } = calculatorState;

  const digitButtonClickHandler = (value: string) => {
    setCalculatorState({
      type: CALCULATOR_ACTIONS.INPUT_DIGIT,
      payload: { value },
    });
  };

  const resetButtonClickHandler = () => {
    setCalculatorState({ type: CALCULATOR_ACTIONS.CLEAR });
  };

  const operatorButtonClickHandler = (operator: string) => {
    setCalculatorState({
      type: CALCULATOR_ACTIONS.OPERATOR,
      payload: { operator },
    });
  };

  return (
    <div className="calculator">
      <CalculatorDisplay display={display} />
      <DigitButtons onDigitClick={digitButtonClickHandler} />
      <ModifyButton onResetClick={resetButtonClickHandler} />
      <OperatorButtons onOperatorClick={operatorButtonClickHandler} />
    </div>
  );
}
