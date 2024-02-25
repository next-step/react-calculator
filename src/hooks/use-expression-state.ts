import { useState } from 'react'
import Validator from '@/lib/validator'
import Calculator from '@/lib/calculator'

const ZERO = '0'
const INIFINITY_TEXT = '오류'

export const useExpressionState = () => {
  const [expression, setExpression] = useState(ZERO)

  const resultedExpression = Calculator.isInfinity(expression) ? INIFINITY_TEXT : expression

  const updateExpression = (input: string) => {
    if (Calculator.isInfinity(expression)) return
    const derivedExpression = expression === ZERO ? input : expression + input
    new Validator(derivedExpression).validateExpression()
    setExpression(derivedExpression)
  }

  const calculateExpression = () => {
    const calculatedExpression = String(new Calculator(expression).calculate())
    setExpression(calculatedExpression)
  }

  const clearExpression = () => {
    setExpression(ZERO)
  }

  return [resultedExpression, updateExpression, calculateExpression, clearExpression] as const
}
