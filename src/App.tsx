import { ARITHMETIC_OPERATORS, ASSIGN_OPERATOR, OPERANDS, CLEAR_MODIFIER } from '@/constants'
import { useExpressionState } from '@/hooks/use-expression-state'
import { getErrorMessage } from './utils/get-error-message'
import { Operator } from './types'

function App() {
  const {
    expression,
    updateExpression,
    updateByOperand,
    updateByOperator,
    calculateExpression,
    clearExpression,
  } = useExpressionState()

  const handleClickOperand = (operand: number) => () => {
    try {
      updateByOperand(operand)
    } catch (error) {
      alert(getErrorMessage(error))
    }
  }

  const handleClickArithmeticOperator = (operator: Operator) => () => {
    try {
      updateByOperator(operator)
    } catch (error) {
      alert(getErrorMessage(error))
    }
  }

  const handleClickAssignOperator = () => {
    calculateExpression()
  }

  const handleClickClearModifer = () => {
    clearExpression()
  }

  return (
    <div className="calculator">
      <div id="total">{expression}</div>
      <div className="modifiers subgrid">
        <button onClick={handleClickClearModifer}>{CLEAR_MODIFIER}</button>
      </div>
      <div className="operations subgrid">
        {ARITHMETIC_OPERATORS.map(operator => (
          <button key={operator} onClick={handleClickArithmeticOperator(operator)}>
            {operator}
          </button>
        ))}
        <button onClick={handleClickAssignOperator}>{ASSIGN_OPERATOR}</button>
      </div>
      <div className="digits flex">
        {OPERANDS.map(operand => (
          <button key={operand} onClick={handleClickOperand(operand)}>
            {operand}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
