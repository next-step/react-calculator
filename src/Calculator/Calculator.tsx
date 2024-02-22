import { useState } from 'react'
import DigitButtonList from './DigitButtonList'
import OperationButtonList from './OperationButtonList'

const Calculator = () => {
  const [total, setTotal] = useState(0)

  return (
    <section className="calculator">
      <h1 id="total">{total}</h1>
      <DigitButtonList onChange={setTotal} />
      <div className="modifiers subgrid">
        <button className="modifier">AC</button>
      </div>
      <OperationButtonList />
    </section>
  )
}

export default Calculator
