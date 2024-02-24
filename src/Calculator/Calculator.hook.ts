import { useState } from 'react'
import { OPERATION } from './Calculator.type'
import { calculate } from './Calculator.util'

export const useCalculator = () => {
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
    if (!operation) {
      setLeftOperand((prevLeftOperand) => `${prevLeftOperand}${addedDigit}`)

      return
    }

    setRightOperand((prevRightOperand) => `${prevRightOperand}${addedDigit}`)
  }

  const updateOperation = (nextOperation: OPERATION) => {
    if (nextOperation !== '=') {
      setOperation(nextOperation)

      return
    }

    const currentResult = calculate({
      leftOperand: Number(leftOperand),
      operation,
      rightOperand: Number(rightOperand),
    })

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
