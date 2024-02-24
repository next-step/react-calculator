import OperationButtonList from './OperationButtonList'
import { useCalculator } from './Calculator.hook'
import { DIGITS } from './Calculator.const'

const Calculator = () => {
  const { displayedContents, initialize, updateOperand, updateOperation } =
    useCalculator()

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
      <OperationButtonList onChange={updateOperation} />
    </section>
  )
}

export default Calculator
