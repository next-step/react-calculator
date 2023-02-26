import { useState } from "react"
import DigitBoard from "./DigitBoard"
import ModifierButton from "./ModifierButton"
import OperationBoard from "./OperationBoard";
import Total from "./Total"

function Calculator() {
  const [expression, setExpression] = useState("0");

  const setDigit = (number: string) => {
    setExpression((prev) => (prev === "0" ? number : prev + number));
  }

  return (
    <div className="calculator">
      <Total total={expression} />
      <DigitBoard
        setDigit={setDigit}
      />
      <ModifierButton />
      <OperationBoard />
    </div>
  )
}

export default Calculator;