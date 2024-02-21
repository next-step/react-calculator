import DigitButtonList from './DigitButtonList'
import OperationButtonList from './OperationButtonList'

const Calculator = () => {
  return (
    <section className="calculator">
      <h1 id="total">0</h1>
      <DigitButtonList />
      <div className="modifiers subgrid">
        <button className="modifier">AC</button>
      </div>
      <OperationButtonList />
    </section>
  )
}

export default Calculator
