import { useState } from 'react'
import DigitButtonList from './DigitButtonList'
import OperationButtonList from './OperationButtonList'
import { OPERATION } from './OperationButtonList/OperationButton/OperationButton.type'

const Calculator = () => {
  const [digit, setDigit] = useState(0)
  const [operation, setOperation] = useState<OPERATION | ''>('')

  return (
    <section className="calculator">
      <h1 id="total">{`${digit}${operation}`}</h1>
      <DigitButtonList
        onChange={(nextDigit: number) =>
          setDigit((prevDigit) => Number(`${prevDigit}${nextDigit}`))
        }
      />
      <div className="modifiers subgrid">
        <button className="modifier">AC</button>
      </div>
      <OperationButtonList onChange={setOperation} />
    </section>
  )
}

export default Calculator
