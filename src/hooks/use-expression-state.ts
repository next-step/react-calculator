import { useState } from 'react'
import Calculator from '@/lib/calculator'
import { Operator } from '@/types'

const ZERO = '0'
const INIFINITY_TEXT = '오류'

const calculator = new Calculator()

export const useExpressionState = () => {
  const [expressionState, setExpressionState] = useState(ZERO)

  const isInfiniteExpression = Calculator.isInfinity(expressionState)
  const expression = isInfiniteExpression ? INIFINITY_TEXT : expressionState

  const updateByOperand = (operand: number) => {
    if (isInfiniteExpression) return
    calculator.updateOperand(operand)
    setExpressionState(calculator.getExpression())
  }

  const updateByOperator = (operator: Operator) => {
    if (isInfiniteExpression) return
    calculator.updateOperator(operator)
    setExpressionState(calculator.getExpression())
  }

  const calculateExpression = () => {
    const calculatedExpression = calculator.calculate()
    setExpressionState(String(calculatedExpression))
  }

  const clearExpression = () => {
    calculator.clear()
    setExpressionState(calculator.getExpression())
  }

  return {
    expression,
    updateByOperand,
    updateByOperator,
    calculateExpression,
    clearExpression,
  }
}
