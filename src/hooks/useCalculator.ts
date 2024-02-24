import { useState } from 'react'

export default function useCalculator() {
  const [input, setInput] = useState('0')
  const [operator, setOperator] = useState('')

  function resetInput(): void {
    setInput('0')
  }

  function handleInput(number: number | string) {
    setInput((prevInput: number | string) => {
      if (prevInput !== '0') return prevInput + number.toString()
      else return number.toString()
    })
  }

  function handleOperator(oper: string) {
    setInput((prevInput) => prevInput + oper)
    setOperator(oper)
  }
  // 입력된 숫자를 더하는 함수
  function calculateNumbers() {
    const numbers = input.split(operator).map(Number)

    let result = 0
    switch (operator) {
      case '+':
        result = numbers.reduce((acc, curr) => acc + curr)
        break
      case '-':
        result = numbers.reduce((acc, curr) => acc - curr)
        break
      case '/':
        result = numbers.reduce((acc, curr) => acc / curr)
        break
      case 'X':
        result = numbers.reduce((acc, curr) => acc * curr)
        break
      default:
        break
    }

    if (Number.isNaN(result)) {
      setInput('오류')
      return
    }

    setInput(String(Math.floor(result))) // 결과를 입력 상태로 설정
  }

  return {
    input,
    resetInput,
    handleInput,
    handleOperator,
    calculateNumbers,
  }
}
