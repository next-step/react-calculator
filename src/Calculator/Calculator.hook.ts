import { useState } from 'react'
import { Operation, UseCalculatorProps } from './Calculator.type'
import { calculate } from './Calculator.util'
import { DEFAULT_MAX_NUMBER_LENGTH } from './Calculator.const'

export const useCalculator = ({
  maxNumberLength = DEFAULT_MAX_NUMBER_LENGTH,
}: UseCalculatorProps) => {
  const [calculatedResult, setCalculatedResult] = useState('0')
  const [leftOperand, setLeftOperand] = useState('')
  const [operation, setOperation] = useState<Operation | ''>('')
  const [rightOperand, setRightOperand] = useState('')
  const displayedContents = !leftOperand
    ? calculatedResult
    : `${leftOperand}${operation}${rightOperand}`

  const initialize = () => {
    setCalculatedResult('0')
    setLeftOperand('')
    setOperation('')
    setRightOperand('')
  }

  const updateOperand = (addedDigit: number) => {
    const nextDigit = !operation
      ? `${leftOperand}${addedDigit}`
      : `${rightOperand}${addedDigit}`

    /** 중복된 0 입력 무효 처리 */
    if (Number(nextDigit) === 0) {
      return
    }

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

  const updateOperation = (nextOperation: Operation) => {
    if (nextOperation !== '=') {
      setOperation(nextOperation)

      return
    }

    updateCalculatedValue(
      Math.floor(
        calculate({
          leftOperand: Number(leftOperand),
          operation,
          rightOperand: Number(rightOperand),
        }),
      ),
    )
  }

  const updateCalculatedValue = (calculatedValue: number) => {
    if (calculatedValue === Infinity || calculatedValue === -Infinity) {
      setCalculatedResult('오류')
      setLeftOperand('')
      setOperation('')
      setRightOperand('')

      return
    }

    setCalculatedResult(String(calculatedValue))
    setLeftOperand(String(calculatedValue))
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
