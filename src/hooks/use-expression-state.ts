import { useState } from 'react'
import Validator from '@/lib/validator'
import Calculator from '@/lib/calculator'

const ZERO = '0'
const INIFINITY_TEXT = '오류'

export const useExpressionState = () => {
  const [_expression, setExpression] = useState(ZERO)

  const resultedExpression = Calculator.isInfinity(_expression) ? INIFINITY_TEXT : _expression

  const updateExpression = (input: string) => {
    if (Calculator.isInfinity(_expression)) return
    const derivedExpression = _expression === ZERO ? input : _expression + input
    new Validator(derivedExpression).validateExpression()
    setExpression(derivedExpression)
  }

  const calculateExpression = () => {
    const calculatedExpression = String(new Calculator(_expression).calculate())
    setExpression(calculatedExpression)
  }

  const clearExpression = () => {
    setExpression(ZERO)
  }

  return { expression: resultedExpression, updateExpression, calculateExpression, clearExpression }
}
