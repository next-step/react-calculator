import { useState } from 'react'

import DigitButton from '@components/digitButton'
import OperationButton from '@components/operationButton'

import { DIGIT_NUMBER, OPERATIONS } from '@/constant/calculator'

import { DigitNumber, Operation } from '@/types/calculator'

import { calculator } from '@/utils/calculator'

const Calculator = () => {
  const [total, setTotal] = useState(0)
  const [operator, setOperator] = useState({
    leftPort: 0,
    rightPort: 0,
    expression: '',
  })

  const handleDigit = (digit: DigitNumber) => {
    const { expression } = operator
    const newTotal = Boolean(expression) ? digit : Number(total.toString().concat(digit.toString()))
    if (newTotal > 999) return alert('세 자리 수 이상 입력할 수 없습니다.')
    if (Boolean(expression)) {
      setOperator({ ...operator, rightPort: newTotal })
    } else {
      setOperator({ ...operator, leftPort: newTotal })
    }
    setTotal(newTotal)
  }

  const handleOperation = (operation: Operation) => {
    const { leftPort, rightPort, expression } = operator
    if (operation === '=') {
      switch (expression) {
        case '+':
          setTotal(calculator['+'](leftPort, rightPort))
          break
        case '-':
          setTotal(calculator['-'](leftPort, rightPort))
          break
        case 'X':
          setTotal(calculator['X'](leftPort, rightPort))
          break
        case '/':
          setTotal(calculator['/'](leftPort, rightPort))
          break
        default:
          return
      }
    }
    if (Boolean(expression)) return alert('두 개의 숫자에 대한 연산만 가능합니다.')
    setOperator({ ...operator, expression: operation })
  }

  const handleReset = () => {
    setTotal(0)
    setOperator({ leftPort: 0, rightPort: 0, expression: '' })
  }

  return (
    <div className="calculator">
      <h1 id="total">{total}</h1>
      <div className="digits flex">
        {DIGIT_NUMBER.map((digit) => (
          <DigitButton key={digit} digit={digit} onClick={handleDigit} />
        ))}
      </div>
      <div className="modifiers subgrid">
        <button className="modifier" onClick={handleReset}>
          AC
        </button>
      </div>
      <div className="operations subgrid">
        {OPERATIONS.map((operation) => (
          <OperationButton key={operation} operation={operation} onClick={handleOperation} />
        ))}
      </div>
    </div>
  )
}

export default Calculator
