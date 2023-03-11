import DigitBoard from "./DigitBoard"
import ModifierButton from "./ModifierButton"
import OperationBoard from "./OperationBoard";
import { useCalculate } from "../hooks/useCalculate";


function Calculator() {

  const { expression, onOperatorClick, onAllClearClick, onDigitClick, onClickEqual } = useCalculate();
  
  return (
    <div className="calculator">
      <h1 id="total">{expression}</h1>
      <DigitBoard
        setDigit={onDigitClick}
      />
      <ModifierButton
        clear={onAllClearClick}
      />
      <OperationBoard
        setOperation={onOperatorClick}
        onClickEqual={onClickEqual}
      />
    </div>
  )
}

export default Calculator;