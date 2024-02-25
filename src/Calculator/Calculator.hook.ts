import { useState } from 'react'
import { Operator } from './Calculator.type'
import { calculate } from './Calculator.util'
import { DEFAULT_MAX_NUMBER_LENGTH } from './Calculator.const'

export type Props = {
  /** 입력할 수 있는 숫자의 최대 자리 수 */
  maxNumberLength?: number
}

export const useCalculator = ({
  maxNumberLength = DEFAULT_MAX_NUMBER_LENGTH,
}: Props) => {
  const [isCalculating, setIsCalculating] = useState(false)
  const [calculatedResult, setCalculatedResult] = useState('0')
  const [leftOperand, setLeftOperand] = useState('')
  const [operator, setOperator] = useState<Operator | ''>('')
  const [rightOperand, setRightOperand] = useState('')
  const displayedContents = !isCalculating
    ? calculatedResult
    : `${leftOperand}${operator}${rightOperand}`

  const initialize = () => {
    setCalculatedResult('0')
    setLeftOperand('')
    setOperator('')
    setRightOperand('')
  }

  const updateOperand = (addedDigit: number) => {
    const nextDigit = !operator
      ? `${leftOperand}${addedDigit}`
      : `${rightOperand}${addedDigit}`

    /** 중복된 0 입력 무효 처리 */
    if (Number(nextDigit) === 0 && nextDigit.length > 1) {
      return
    }

    if (nextDigit.length > maxNumberLength) {
      alert(`숫자는 최대 ${maxNumberLength}자리 까지 입력이 가능합니다.`)

      return
    }

    setIsCalculating(true)

    if (!operator) {
      setLeftOperand(nextDigit)

      return
    }

    setRightOperand(nextDigit)
  }

  const updateOperator = (nextOperation: Operator) => {
    if (nextOperation !== '=') {
      setIsCalculating(true)
      setOperator(nextOperation)

      return
    }

    updateCalculatedValue(
      calculate({
        leftOperand: Number(leftOperand),
        operator,
        rightOperand: Number(rightOperand),
      }),
    )
  }

  const updateCalculatedValue = (calculatedValue: number) => {
    if (calculatedValue === Infinity || calculatedValue === -Infinity) {
      setCalculatedResult('오류')
      setLeftOperand('')
      setOperator('')
      setRightOperand('')

      return
    }

    setCalculatedResult(String(calculatedValue))
    setLeftOperand(String(calculatedValue))
    setOperator('')
    setRightOperand('')
  }

  return {
    displayedContents,
    initialize,
    updateOperand,
    updateOperator,
  }
}
