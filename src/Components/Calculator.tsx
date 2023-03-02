import { useState } from "react"
import { calculate, isNumeric } from "../Utils/Numeric";
import DigitBoard from "./DigitBoard"
import ModifierButton from "./ModifierButton"
import OperationBoard from "./OperationBoard";
import Total from "./Total"
import { CalculationMessage } from "../Constants/ErrorMessage";

function Calculator() {
  const [expression, setExpression] = useState("0");


  const canAddDigit = () => {
    const lastIndex = expression.length - 1;

    if (lastIndex <= 1) {
      return true;
    }

    // 숫자가 입력됐을 때 마지막 3글자가 숫자인지 판별
    for (let i = 0; i < 3; i++) {
      if (lastIndex - i >= 0 && !isNumeric(expression[lastIndex - i])) {
        return true;
      }
    }

    return false;
  }

  const setDigit = (number: string) => {
    if (!canAddDigit()) {
      alert(CalculationMessage.MAX_DIGIT_LENGTH);
      return;
    }

    setExpression((prev) => (prev === "0" ? number : prev + number));
  }


  const clear = () => {
    setExpression("0");
  }

  const canAddOperation = () => expression.split('').every(isNumeric);

  const canCalculate = () => {
    const operation =  expression.split('').filter((ex) => !isNumeric(ex));
    const lastIndex = expression.length - 1;

    return operation.length === 1 && isNumeric(expression[lastIndex]);
  }

  const setOperation = (operation: string) => {
    if (operation === '=') {
      if (!canCalculate()) {
        alert(CalculationMessage.CANT_CACLULATE);
        return;
      }

      const resultOfCalculation = calculate(expression);
      setExpression(resultOfCalculation === "Infinity" ? "오류" : resultOfCalculation)
      return; 
    }

    if (!canAddOperation()) {
      alert(CalculationMessage.CANT_ADD_OPERATION);
      return;
    }

    setExpression((prev) => (prev + operation));
  }

  return (
    <div className="calculator">
      <Total total={expression} />
      <DigitBoard
        setDigit={setDigit}
      />
      <ModifierButton
        clear={clear}
      />
      <OperationBoard
        setOperation={setOperation}
      />
    </div>
  )
}

export default Calculator;