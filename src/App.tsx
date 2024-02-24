import { useState } from 'react'
import { ARITHMETIC_OPERATORS, ASSIGN_OPERATOR, OPERANDS, CLEAR_MODIFIER } from '@/constants'
import { checkValidInput } from '@/lib/validator'
import Calculator from '@/lib/calculator'

const INITIAL_EXPRESSION = ''

function App() {
  const [expression, setExpression] = useState(INITIAL_EXPRESSION)

  const handleClickOperand = (operand: string) => () => {
    try {
      // 0이면 지워버리는 로직 포함해서 바꾸기
      const derivedExpression = expression + operand
      checkValidInput(derivedExpression)
      setExpression(derivedExpression)
    } catch (error) {
      alert((error as Error)?.message)
    }
  }

  const handleClickArithmeticOperator = (operator: string) => () => {
    try {
      const derivedExpression = expression + operator
      checkValidInput(derivedExpression)
      setExpression(derivedExpression)
    } catch (error) {
      alert((error as Error)?.message)
    }
  }

  const handleClickAssignOperator = () => {
    setExpression(String(new Calculator(expression).calculate()))
  }

  const handleClickClearModifer = () => {
    setExpression(INITIAL_EXPRESSION)
  }

  return (
    <div className="calculator">
      <div id="total">{expression === INITIAL_EXPRESSION ? '0' : expression}</div>
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
      <div className="digits">
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
