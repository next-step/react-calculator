import { MouseEventHandler, useState } from 'react'

import { Calculator } from '../../modules/Calculator/Calculator'
import { isNil } from '../../utils'
import { MAX_NUMBER_COUNT } from './const'
import { Operator } from './type'

export const useCalculator = () => {
  const [number1, setNumber1] = useState<number | null>(null)
  const [number2, setNumber2] = useState<number | null>(null)
  const [operator, setOperator] = useState<Operator | null>(null)
  const [showOutput, setShowOutput] = useState(false)

  const calculator = new Calculator()

  const getResult = () => {
    if (!number1 || !number2) return

    if (operator === '+') {
      return calculator.add(number1, number2)
    }

    if (operator === '-') {
      return calculator.minus(number1, number2)
    }

    if (operator === '/') {
      return Number(calculator.division(number1, number2).toFixed(0))
    }

    if (operator === 'X') {
      return calculator.multiply(number1, number2)
    }
  }

  const validator = (value: number) => {
    if (String(value).length > MAX_NUMBER_COUNT) {
      throw new Error('숫자는 세 자리까지만 입력 가능합니다!')
    }

    return true
  }

  const getCurrentStep = () => {
    if (showOutput) {
      return 'showOutput'
    }

    if (!operator) {
      return 'firstNumberReceiving'
    }

    return 'secondNumberReceiving'
  }

  const getValueForCurrentStep = (value: number, step: ReturnType<typeof getCurrentStep>) => {
    if (step === 'firstNumberReceiving') {
      return isNil(number1) ? value : Number(String(number1) + value)
    }

    if (step === 'secondNumberReceiving') {
      return isNil(number2) ? value : Number(String(number2) + value)
    }

    const result = getResult()
    const fullValue = result === 0 ? value : Number(String(result) + value)

    return fullValue
  }

  const onClickNumber: MouseEventHandler<HTMLButtonElement> = (e) => {
    const value = e.currentTarget.name

    try {
      const currentStep = getCurrentStep()
      const currentStepValue = getValueForCurrentStep(Number(value), currentStep)

      validator(currentStepValue)

      if (currentStep === 'showOutput') {
        setNumber1(currentStepValue)
        setNumber2(null)
        setOperator(null)
        setShowOutput(false)

        return
      }

      if (currentStep === 'firstNumberReceiving') {
        setNumber1(Number(currentStepValue))

        return
      }

      setNumber2(Number(currentStepValue))
    } catch (error) {
      if (error instanceof Error) {
        window.alert(error.message)

        return
      }

      window.alert('알 수 없는 에러가 발생했습니다.')
    }
  }

  const onClickOperator: MouseEventHandler<HTMLButtonElement> = (e) => {
    const value = e.currentTarget.name as Operator

    if ([number1, number2, operator].every((item) => item === null)) {
      return
    }

    if (showOutput) {
      if (value === '=') return

      setNumber1(getResult()!)
      setNumber2(null)
      setShowOutput(false)
      setOperator(value)

      return
    }

    if (value === '=') {
      if ([number1, number2, operator].some((item) => item === null)) return

      setShowOutput(true)

      return
    }

    setOperator(value)
  }

  const onClickReset = () => {
    setNumber1(null)
    setNumber2(null)
    setOperator(null)
    setShowOutput(false)
  }

  const getUserInputs = (): string => {
    // 초깃값 처리
    if ([number1, number2, operator].every((item) => item === null)) {
      return String(0)
    }

    return [number1, operator, number2].reduce((prev, cur) => {
      return isNil(cur) ? prev : `${prev} ${cur}`.trim()
    }, '')
  }

  const parseResultWindow = () => {
    if (showOutput) {
      const res = getResult()

      return Number.isFinite(res) ? res : '오류'
    }

    return getUserInputs()
  }

  return {
    resultWindow: parseResultWindow(),
    handler: {
      onClickNumber,
      onClickOperator,
      onClickReset,
    },
  }
}
