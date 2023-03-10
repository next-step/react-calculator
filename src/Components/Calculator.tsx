import DigitBoard from "./DigitBoard"
import ModifierButton from "./ModifierButton"
import OperationBoard from "./OperationBoard";
import Total from "./Total"
import { useCalculate } from "../hooks/useCalculate";


function Calculator() {

  const { expression, onOperatorClick, onAllClearClick, onDigitClick } = useCalculate();
  
  return (
    <div className="calculator">
      <Total total={expression} />
      <DigitBoard
        setDigit={onDigitClick}
      />
      <ModifierButton
        clear={onAllClearClick}
      />
      <OperationBoard
        setOperation={onOperatorClick}
      />
    </div>
  )
}

export default Calculator;