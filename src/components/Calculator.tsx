import { ERROR_MESSAGE } from "@/constants/message"
import { REGEXP } from "@/constants/regexp"
import { Calculator as CalculatorApp } from "@/utils/calculator"
import { FormEventHandler, useState } from "react"

type Operation = Exclude<keyof CalculatorApp, 'getValue' | 'clear'>

type CalculatorOperationMap = {
  [key in Operation]: string
}

const CALCULATOR_OPERATION_MAP: CalculatorOperationMap = {
  sum: '+',
  subtract: '-',
  multiply: 'x',
  division: '/'
}

export const Calculator = () => {
  const [formula, setFormula] = useState('')

  const handleClickClear = () => {
    setFormula('')
  }

  const handleClickOperation = (operation: Operation) => () => {
    if(!REGEXP.END_WITH_NUMBER.test(formula)) {
      alert(ERROR_MESSAGE.NOT_VALID_FORMULA)
      return
    }

    const operationSymbol = CALCULATOR_OPERATION_MAP[operation]
    setFormula((prev) => prev + operationSymbol)
  }

  const handleClickNumber = (num: number) => () => {
    const newFormula = formula + num

    if(REGEXP.MAX_LENGTH_NUMBER.test(newFormula)) {
      alert(ERROR_MESSAGE.MAX_LENGTH_NUMBER)
      return
    }

    setFormula(newFormula)
  }


  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    handleClickClear()
  }

  return (
    <form onSubmit={handleSubmit}>
    <input id="result" type="text" value={formula} readOnly/>
    <div>
      <button type="button" onClick={handleClickClear}>AC</button>
      <button type="button" onClick={handleClickOperation('division')}>/</button>
    </div>
    <div>
      {[7, 8, 9].map(num => (
        <button key={`num-${num}`} type="button" onClick={handleClickNumber(num)}>{num}</button>
      ))}
      <button type="button" onClick={handleClickOperation('multiply')}>x</button>
    </div>
    <div>
      {[4, 5, 6].map(num => (
        <button key={`num-${num}`} type="button" onClick={handleClickNumber(num)}>{num}</button>
      ))}
      <button type="button" onClick={handleClickOperation('subtract')}>-</button>
    </div>
    <div>
      {[1, 2, 3].map(num => (
        <button key={`num-${num}`} type="button" onClick={handleClickNumber(num)}>{num}</button>
      ))}
      <button type="button" onClick={handleClickOperation('sum')}>+</button>
    </div>
    <div>
      <button type="button" onClick={handleClickNumber(0)}>0</button>
      <button type="submit">=</button>
    </div>
  </form>
  )
}