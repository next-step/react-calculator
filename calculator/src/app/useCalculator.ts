import { useState } from "react"

const useCalculator = () => {
  const [formula, setFormula] = useState('0')
  const [lastChar, setLastChar] = useState('0')
  const [currentNumberCount, setCurrentNumberCount] = useState(0)

  const isLastCharOperator = () => {
    return !Number.isInteger(Number(lastChar))
  }

  const number =  (num:number)=>{
    if (isLastCharOperator()){
        setCurrentNumberCount(1)
      } else { 
        if (currentNumberCount === 3) {
          alert('숫자는 한번에 최대 3자리 수까지 입력 가능합니다.')
          return
        }
        setCurrentNumberCount(currentNumberCount+1)
      }

    setLastChar(num.toString())

    if (formula === '오류'|| formula === '0') {
      setFormula(num.toString())
      setCurrentNumberCount(1)
    } else {
      setFormula(formula + num.toString())
    } 

  }
  
  const add=()=> {
    if (isLastCharOperator()){
      alert('숫자를 먼저 입력하고 연산자를 입력해주세요! ')
      return 
    }
    setFormula(formula +'+')
    setLastChar('+')
    
  }
  const subtract=()=> {
    if (isLastCharOperator()){
      alert('숫자를 먼저 입력하고 연산자를 입력해주세요! ')
      return 
    }
    setFormula(formula +'-')
    setLastChar('-')
  }
  const multiply=()=> {
    if (isLastCharOperator()){
      alert('숫자를 먼저 입력하고 연산자를 입력해주세요! ')
      return 
    }
    setFormula(formula +'*')
    setLastChar('*')
    
  }
  const divide=()=> {
    if (isLastCharOperator()){
      alert('숫자를 먼저 입력하고 연산자를 입력해주세요! ')
      return 
    }
    setFormula(formula +'/')
    setLastChar('/')

  }
  
  const calculate=() =>{
    if (isLastCharOperator()){
      setFormula(formula.slice(0,-1))
    }

    if (eval(formula) === Infinity) {
      setFormula('오류')
      return
    } 
    const result = Math.floor(eval(formula)).toString()
    setFormula(result)
  }

  const clearAll=()=>{
    setFormula('0')
    setCurrentNumberCount(1)
  }
  return {
    formula,
    number,
    add,
    subtract,
    multiply,
    divide,
    calculate,
    clearAll
}
}

export default useCalculator