import { useState } from 'react'
import { Calculator as CalculatorApp } from '@/utils/calculator'
import { ERROR_MESSAGE } from '@/constants/message'
import { REGEXP } from '@/constants/regexp'
import { Operation, Operator } from '@/types/app'
import { OPERATION_SYMBOLS } from '@/constants/app'

export const useCalculator = () => {
  const calculator = new CalculatorApp()
  const [formula, setFormula] = useState('')

  const tokenizeFormula = () => formula.split(REGEXP.OPERATOR)

  const performOperation = (
    currentValue: number,
    nextValue: number,
    operator: Operator
  ) => {
    const operations = {
      '+': calculator.sum,
      '-': calculator.subtract,
      x: calculator.multiply,
      '/': calculator.division
    }

    operations[operator].call(calculator, currentValue, nextValue)
    return calculator.getValue()
  }

  const performCalculation = () => {
    const tokens = tokenizeFormula()
    let currentValue = Number(tokens[0])

    for (let index = 1; index < tokens.length; index += 2) {
      const operator = tokens[index] as Operator
      const nextValue = Number(tokens[index + 1])

      currentValue = performOperation(currentValue, nextValue, operator)
    }

    return currentValue
  }

  const clearFormula = () => setFormula('')

  const appendOperation = (operation: Operation) => {
    if (!REGEXP.END_WITH_NUMBER.test(formula)) {
      alert(ERROR_MESSAGE.NOT_VALID_FORMULA)
      return
    }

    setFormula(prev => `${prev}${OPERATION_SYMBOLS[operation]}`)
  }

  const appendNumber = (num: number) => {
    const isStartZero = formula.startsWith('0') && formula.length === 1
    const newFormula = isStartZero ? num.toString() : `${formula}${num}`

    if (REGEXP.MAX_LENGTH_NUMBER.test(newFormula)) {
      alert(ERROR_MESSAGE.MAX_LENGTH_NUMBER)
      return
    }

    setFormula(newFormula)
  }

  const calculateAndSetFormula = () => {
    const result = performCalculation()
    setFormula(result.toString())
  }

  return {
    formula,
    clearFormula,
    appendOperation,
    appendNumber,
    calculateAndSetFormula
  }
}
