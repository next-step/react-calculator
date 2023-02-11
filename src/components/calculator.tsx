import DigitButton from '@components/digitButton'
import OperationButton from '@components/operationButton'

import { DIGIT_NUMBER, OPERATIONS } from '@constant/calculator'

const Calculator = () => {
  return (
    <div className="calculator">
      <h1 id="total">0</h1>
      <div className="digits flex">
        {DIGIT_NUMBER.map((digit) => (
          <DigitButton key={digit} digit={digit} />
        ))}
      </div>
      <div className="modifiers subgrid">
        <button className="modifier">AC</button>
      </div>
      <div className="operations subgrid">
        {OPERATIONS.map((operation) => (
          <OperationButton key={operation} operation={operation} />
        ))}
      </div>
    </div>
  )
}

export default Calculator
