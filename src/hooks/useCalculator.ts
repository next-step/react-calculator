import { useCallback, useMemo, useState } from 'react'
import { Operation } from '../constants/operation'

const regx = /[+\-x/]/gi

const useCalculator = () => {
  const [totalValue, setTotalValue] = useState('0') //현재

  const checkOperator = () => {
    const lastIndex = totalValue.length
    return totalValue === '0' || totalValue.charAt(lastIndex - 1).match(regx)
  }

  const limitDigitLength = () => {
    const splitTotal = totalValue.split(regx)

    if (splitTotal.length > 3) {
      return splitTotal
    } else {
      return splitTotal[splitTotal.length - 1]
    }
  }

  const calculator = (opr: string, val: string[]) => {
    switch (opr) {
      case '/':
        return Math.floor(Number(val[0]) / Number(val[1]))

      case 'X':
        return Math.floor(Number(val[0]) * Number(val[1]))
      case '-':
        return Math.floor(Number(val[0]) - Number(val[1]))
      case '+':
        return Math.floor(Number(val[0]) + Number(val[1]))
      default:
        break
    }
  }

  const operation = (operation: Operation) => {
    if (checkOperator()) return alert('숫자를 먼저 입력한 후 연산자를 입력해주세요!')
    // 리뷰 코멘트 한번 더 확인해보기!
    const findChar = totalValue.match(regx)
    const splitTotal = totalValue.split(regx).splice(0, 2)

    if (operation === Operation.EQUAL) {
      if (!findChar) return

      setTotalValue(String(calculator(findChar[0], splitTotal)))
    } else {
      setTotalValue((state) => state + operation)
    }
  }

  const onDigitClick = (value: number) => {
    const temp = totalValue

    if (limitDigitLength().length < 3) {
      if (temp !== '0') {
        setTotalValue(temp + String(value))
      } else {
        setTotalValue(String(value))
      }
    } else {
      alert('숫자는 세 자리까지만 입력 가능합니다.')
    }
  }

  return [totalValue, setTotalValue, operation, onDigitClick] as const
}

export default useCalculator
