import { DIGITS, OPERATORS } from '../../constants/calculator'
import useCalculator from '../../hooks/useCalculator'
import './calculator.css'

function Calculator() {
  const {
    input,
    resetInput,
    handleInput,
    handleOperator,
    calculateNumbers,
  } = useCalculator()
  
  return (
    <div className="calculator">
      <h1 id="total">{input}</h1>
      <div className="digits flex">
        {DIGITS.map((digit: number) => (
          <button
            type="button"
            className="digit"
            key={digit}
            onClick={() => handleInput(digit)}
          >
            {digit}
          </button>
        ))}
      </div>
      <div className="modifiers subgrid">
        <button type="button" className="modifier" onClick={resetInput}>
          AC
        </button>
      </div>
      <div className="operations subgrid">
        {OPERATORS.map((operator: string) => (
          <button
            type="button"
            className="operation"
            onClick={() => handleOperator(operator)}
          >
            {operator}
          </button>
        ))}
        <button className="operation" onClick={calculateNumbers}>
          =
        </button>
      </div>
    </div>
  )
}

export default Calculator
