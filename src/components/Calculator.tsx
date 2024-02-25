import { useCalculator } from "@/hooks/useCalculator"
import { Operation } from "@/types/calculator"
import { FormEventHandler } from "react"

export const Calculator = () => {
  const { formula, clearFormula, appendOperation, appendNumber, calculateAndSetFormula } = useCalculator()

  const handleClickOperation = (operation: Operation) => () => appendOperation(operation)
  const handleClickNumber = (num: number) => () => appendNumber(num)

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    calculateAndSetFormula()
  }

  return (
    <form onSubmit={handleSubmit}>
    <input id="result" type="text" value={formula || 0} readOnly/>
    <div>
      <button type="button" onClick={clearFormula}>AC</button>
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