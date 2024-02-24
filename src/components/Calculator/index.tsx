import '../../css/index.css'

import { CALCULATOR_NUMBER_LIST, OPERATOR_LIST } from './const'
import { useCalculator } from './hook'

export const Calculator = () => {
  const { handler, resultWindow } = useCalculator()

  return (
    <div className="calculator">
      <h1 id="total">{resultWindow}</h1>

      <div className="digits">
        {CALCULATOR_NUMBER_LIST.map((number) => (
          <button key={number} name={String(number)} onClick={handler.onClickNumber}>
            {number}
          </button>
        ))}
      </div>

      <div className="modifiers subgrid">
        <button className="modifier" onClick={handler.onClickReset}>
          AC
        </button>
      </div>

      <div className="operations subgrid">
        {OPERATOR_LIST.map((operator) => (
          <button
            className="operation"
            key={operator}
            name={operator}
            onClick={handler.onClickOperator}
          >
            {operator}
          </button>
        ))}
      </div>
    </div>
  )
}
