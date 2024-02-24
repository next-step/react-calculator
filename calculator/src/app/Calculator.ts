import { useState } from "react"

const Calculator = ()=> {
  const [formula, setFormula] = useState('0')

  const number =  (num:number)=>{
    if (formula === '0') {
      setFormula(num.toString())
    }
    else{
      setFormula(formula+num.toString())
    }
  }
  
  const add=()=> {
    setFormula(formula +'+')
    
  }
  const subtract=()=> {
    setFormula(formula +'-')

  }
  const multiply=()=> {
    setFormula(formula +'*')

  }
  const divide=()=> {
    setFormula(formula +'/')

  }
  
  const calculate=() =>{
    setFormula(Math.floor(eval(formula)).toString())
  }
  const clearAll=()=>{
    setFormula('0')
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

export default Calculator