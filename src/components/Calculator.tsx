import DigitButton from '@components/DigitButton'
import OperationButton from '@components/OperationButton'

import { DIGIT_NUMBER, OPERATIONS } from '@/constant/calculator'

import useCalculator from '@/customs/useCalculator'

const Calculator = () => {
  const { total, handleReset, handleCalculatorButton } = useCalculator()

  return (
    <div className="calculator">
      <h1 id="total">{total}</h1>
      <div className="digits flex">
        {DIGIT_NUMBER.map((digit) => (
          <DigitButton key={digit} digit={digit} onClick={handleCalculatorButton} />
        ))}
      </div>
      <div className="modifiers subgrid">
        <button className="modifier" onClick={handleReset}>
          AC
        </button>
      </div>
      <div className="operations subgrid">
        {OPERATIONS.map((operation) => (
          <OperationButton key={operation} operation={operation} onClick={handleCalculatorButton} />
        ))}
      </div>
    </div>
  )
}

export default Calculator
