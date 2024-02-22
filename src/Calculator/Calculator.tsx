import { useState } from 'react'
import DigitButtonList from './DigitButtonList'
import OperationButtonList from './OperationButtonList'
import { OPERATION } from './OperationButtonList/OperationButton/OperationButton.type'

const Calculator = () => {
  const [total, setTotal] = useState('0')

  return (
    <section className="calculator">
      <h1 id="total">{total}</h1>
      <DigitButtonList onChange={(digit: number) => setTotal(String(digit))} />
      <div className="modifiers subgrid">
        <button className="modifier">AC</button>
      </div>
      <OperationButtonList
        onChange={(operation: OPERATION) =>
          setTotal((prev) => prev + operation)
        }
      />
    </section>
  )
}

export default Calculator
