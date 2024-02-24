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
    if (operator === '+') {
      return calculator.add(number1!, number2!)
    }

    if (operator === '-') {
      return calculator.minus(number1!, number2!)
    }

    if (operator === '/') {
      return Number(calculator.division(number1!, number2!).toFixed(0))
    }

    if (operator === 'X') {
      return calculator.multiplication(number1!, number2!)
    }
  }

  const onClickNumber: MouseEventHandler<HTMLButtonElement> = (e) => {
    const value = e.currentTarget.name

    if (showOutput) {
      // 값을 입력하면 결과값에 더해야함
      const result = getResult()!
      const fullValue = result === 0 ? value : String(result) + value

      if (fullValue.length > MAX_NUMBER_COUNT) {
        window.alert('숫자는 세 자리까지만 입력 가능합니다!')

        return
      }

      setNumber1(Number(fullValue))
      setNumber2(null)
      setOperator(null)
      setShowOutput(false)

      return
    }

    // 첫 번째 숫자를 입력중일 경우
    const isFirstNumberReceiving = !operator

    if (isFirstNumberReceiving) {
      const fullValue = isNil(number1) ? String(value) : String(number1) + value

      if (fullValue.length > MAX_NUMBER_COUNT) {
        window.alert('숫자는 세 자리까지만 입력 가능합니다!')

        return
      }

      setNumber1(Number(fullValue))

      return
    }

    // 두 번째 숫자를 입력중일 경우
    const fullValue = isNil(number2) ? String(value) : String(number2) + value

    if (fullValue.length > MAX_NUMBER_COUNT) {
      window.alert('숫자는 세 자리까지만 입력 가능합니다!')

      return
    }

    setNumber2(Number(fullValue))
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
