import { CalculatorProps } from './Calculator.type'
import { useCalculator } from './Calculator.hook'
import { DIGITS, OPERATORS } from './Calculator.const'

const Calculator = ({ maxNumberLength }: CalculatorProps) => {
  const { displayedContents, initialize, updateOperand, updateOperator } =
    useCalculator({ maxNumberLength })

  return (
    <section className="calculator">
      <h1 id="total">{displayedContents}</h1>

      <div className="digits flex">
        {DIGITS.map((digit) => (
          <button key={digit} onClick={() => updateOperand(digit)}>
            {digit}
          </button>
        ))}
      </div>

      <div className="modifiers subgrid">
        <button className="modifier" onClick={initialize}>
          AC
        </button>
      </div>

      <div className="operations subgrid">
        {OPERATORS.map((operator) => (
          <button key={operator} onClick={() => updateOperator(operator)}>
            {operator}
          </button>
        ))}
      </div>
    </section>
  )
}

export default Calculator
