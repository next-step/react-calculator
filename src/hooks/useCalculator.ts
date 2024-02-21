import { useCallback, useMemo, useState } from 'react'

export enum Operation {
  SUM = '+',
  MINUS = '-',
  MULTIPLE = 'X',
  DIVIDED = '/',
  EQUAL = '=',
}
export const regx = /[+\-x/]/gi

const useCalculator = () => {
  const [totalValue, setTotalValue] = useState('0') //현재

  const checkOperator = useMemo(() => {
    const lastIndex = totalValue.length
    return totalValue === '0' || totalValue.charAt(lastIndex - 1).match(regx)
  }, [totalValue])

  const limitDigitLength = useMemo(() => {
    const splitTotal = totalValue.split(regx)

    if (splitTotal.length > 3) return splitTotal
    else return splitTotal[splitTotal.length - 1]
  }, [totalValue])

  const calculator = useCallback((opr: string, val: string[]) => {
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
  }, [])

  const operation = useCallback(
    (operation: Operation) => {
      if (checkOperator) return alert('숫자를 먼저 입력한 후 연산자를 입력해주세요!')

      const findChar = totalValue.match(regx)
      const splitTotal = totalValue.split(regx).splice(0, 2)

      if (operation === Operation.EQUAL) {
        if (!findChar) return
        setTotalValue(String(calculator(findChar[0], splitTotal)))
      } else {
        setTotalValue((state) => state + operation)
      }
    },
    [calculator, checkOperator, totalValue]
  )

  const onDigitClick = useCallback(
    (value: number) => {
      const temp = totalValue

      if (limitDigitLength.length < 3) {
        temp !== '0' ? setTotalValue(temp + String(value)) : setTotalValue(String(value))
      } else {
        alert('숫자는 세 자리까지만 입력 가능합니다.')
      }
    },
    [limitDigitLength, totalValue]
  )

  return [totalValue, setTotalValue, operation, onDigitClick] as const
}

export default useCalculator
