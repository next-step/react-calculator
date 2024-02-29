import { OPERATION_SYMBOLS } from '@/constants/app'
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
              onClick={() => appendNumber(num)}>
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
        {Object.entries(OPERATION_SYMBOLS).map(([operation, symbol]) => (
          <button
            key={operation}
            type="button"
            className="operation"
            onClick={() => appendOperation(operation as Operation)}>
            {symbol}
          </button>
        ))}
        <button type="submit" className="operation" id="equal-sign">
          =
        </button>
      </div>
    </form>
  )
}
