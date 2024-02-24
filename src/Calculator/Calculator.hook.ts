import { useState } from 'react'
import { OPERATION, UseCalculatorProps } from './Calculator.type'
import { calculate } from './Calculator.util'
import { DEFAULT_MAX_NUMBER_LENGTH } from './Calculator.const'

export const useCalculator = ({
  maxNumberLength = DEFAULT_MAX_NUMBER_LENGTH,
}: UseCalculatorProps) => {
  const [result, setResult] = useState(0)
  const [leftOperand, setLeftOperand] = useState('')
  const [operation, setOperation] = useState<OPERATION | ''>('')
  const [rightOperand, setRightOperand] = useState('')
  const displayedContents = !leftOperand
    ? result
    : `${leftOperand}${operation}${rightOperand}`

  const initialize = () => {
    setResult(0)
    setLeftOperand('')
    setOperation('')
    setRightOperand('')
  }

  const updateOperand = (addedDigit: number) => {
    const nextDigit = !operation
      ? `${leftOperand}${addedDigit}`
      : `${rightOperand}${addedDigit}`

    if (nextDigit.length > maxNumberLength) {
      alert(`숫자는 최대 ${maxNumberLength}자리 까지 입력이 가능합니다.`)

      return
    }

    if (!operation) {
      setLeftOperand(nextDigit)

      return
    }

    setRightOperand(nextDigit)
  }

  const updateOperation = (nextOperation: OPERATION) => {
    if (nextOperation !== '=') {
      setOperation(nextOperation)

      return
    }

    const currentResult = Math.floor(
      calculate({
        leftOperand: Number(leftOperand),
        operation,
        rightOperand: Number(rightOperand),
      }),
    )

    setResult(currentResult)
    setLeftOperand(String(currentResult))
    setOperation('')
    setRightOperand('')
  }

  return {
    displayedContents,
    initialize,
    updateOperand,
    updateOperation,
  }
}
