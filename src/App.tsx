import { ARITHMETIC_OPERATORS, ASSIGN_OPERATOR, OPERANDS, CLEAR_MODIFIER } from '@/constants'
import { useExpressionState } from '@/hooks/use-expression-state'

function App() {
  const [expression, updateExpression, calculateExpression, clearExpression] = useExpressionState()

  const handleClickOperand = (operand: string) => () => {
    try {
      updateExpression(operand)
    } catch (error) {
      alert((error as Error).message)
    }
  }

  const handleClickArithmeticOperator = (operator: string) => () => {
    try {
      updateExpression(operator)
    } catch (error) {
      alert((error as Error).message)
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
