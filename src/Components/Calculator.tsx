import DigitBoard from "./DigitBoard"
import ModifierButton from "./ModifierButton"
import OperationBoard from "./OperationBoard";
import Total from "./Total"

function Calculator() {
  return (
    <div className="calculator">
      <Total total={0} />
      <DigitBoard />
      <ModifierButton />
      <OperationBoard />
    </div>
  )
}

export default Calculator;