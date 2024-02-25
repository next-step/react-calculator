import { useCalculator } from '@/hooks/useCalculator'
import { Operation } from '@/types/app'
import { FormEventHandler } from 'react'

export const Calculator = () => {
  const {
    formula,
    clearFormula,
    appendOperation,
    appendNumber,
    calculateAndSetFormula
  } = useCalculator()

  const handleClickOperation = (operation: Operation) => () =>
    appendOperation(operation)
  const handleClickNumber = (num: number) => () => appendNumber(num)

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    calculateAndSetFormula()
  }

  return (
    <form onSubmit={handleSubmit} className="calculator">
      <input id="total" type="text" value={formula || 0} readOnly />
      <div className="digits flex">
        {Array.from({ length: 10 })
          .map((_, idx) => idx)
          .reverse()
          .map(num => (
            <button
              key={`num-${num}`}
              className="digit"
              type="button"
              onClick={handleClickNumber(num)}>
              {num}
            </button>
          ))}
      </div>
      <div className="modifiers subgrid">
        <button type="button" className="modifier" onClick={clearFormula}>
          AC
        </button>
      </div>
      <div className="operations subgrid">
        <button
          type="button"
          className="operation"
          onClick={handleClickOperation('division')}>
          /
        </button>
        <button
          type="button"
          className="operation"
          onClick={handleClickOperation('multiply')}>
          X
        </button>
        <button
          type="button"
          className="operation"
          onClick={handleClickOperation('subtract')}>
          -
        </button>
        <button
          type="button"
          className="operation"
          onClick={handleClickOperation('sum')}>
          +
        </button>
        <button type="submit" className="operation" id="equal-sign">
          =
        </button>
      </div>
    </form>
  )
}
