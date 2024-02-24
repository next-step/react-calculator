import '../../css/index.css'

import { CALCULATOR_NUMBER_LIST, OPERATOR_LIST } from './const'

export const Calculator = () => {
  return (
    <div className="calculator">
      <h1 id="total"></h1>

      <div className="digits">
        {CALCULATOR_NUMBER_LIST.map((number) => (
          <button key={number}>{number}</button>
        ))}
      </div>

      <div className="modifiers subgrid">
        <button className="modifier">AC</button>
      </div>

      <div className="operations subgrid">
        {OPERATOR_LIST.map((operator) => (
          <button className="operation" key={operator}>
            {operator}
          </button>
        ))}
      </div>
    </div>
  )
}
