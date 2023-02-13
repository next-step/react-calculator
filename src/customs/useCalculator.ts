import { useState } from 'react'

import { CalculatorButtonType } from '@/types/calculator'

import { calculate, moreThanThreeDigits } from '@/utils/calculator'

const useCalculator = () => {
  const [total, setTotal] = useState('0')

  const handleCalculatorButton = (button: CalculatorButtonType) => {
    const newTotal = `${total}${button}`.replace(/^0+(?!$)/, '')

    if (moreThanThreeDigits(newTotal)) {
      alert('세 자리 이상 입력할 수 없습니다.')
      return
    }

    if (button === '=') {
      setTotal(calculate(total))
      return
    }

    setTotal(newTotal)
  }

  const handleReset = () => {
    setTotal('0')
  }

  return {
    total,
    handleCalculatorButton,
    handleReset,
  }
}

export default useCalculator
