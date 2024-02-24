import DigitButtonList from './DigitButtonList'
import OperationButtonList from './OperationButtonList'
import { useCalculator } from './Calculator.hook'

const Calculator = () => {
  const { displayedContents, initialize, updateOperand, updateOperation } =
    useCalculator()

  return (
    <section className="calculator">
      <h1 id="total">{displayedContents}</h1>
      <DigitButtonList onChange={updateOperand} />
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
