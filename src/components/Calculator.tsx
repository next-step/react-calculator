import CalculatorButton from '@components/CalculatorButton'

import { DIGIT_NUMBER, OPERATIONS } from '@/constant/calculator'

import useCalculator from '@/customs/useCalculator'

const Calculator = () => {
  const { total, handleReset, handleCalculatorButton } = useCalculator()

  return (
    <div className="calculator">
      <h1 id="total">{total}</h1>
      <div className="digits flex">
        {DIGIT_NUMBER.map((digit) => (
          <CalculatorButton key={digit} button={digit} onClick={handleCalculatorButton} />
        ))}
      </div>
      <div className="modifiers subgrid">
        <button className="modifier" onClick={handleReset}>
          AC
        </button>
      </div>
      <div className="operations subgrid">
        {OPERATIONS.map((operation) => (
          <CalculatorButton key={operation} button={operation} onClick={handleCalculatorButton} />
        ))}
      </div>
    </div>
  )
}

export default Calculator
