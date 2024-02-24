import { isNumber } from "@/utils/validation"
import { Calculator as CalculatorApp } from "@/utils/calculator"
import { ChangeEventHandler, FormEventHandler, useState } from "react"

export const Calculator = () => {
  const calculator = new CalculatorApp()
  const [inputValues, setInputValues] = useState({
    first: '',
    second: '',
    result: 0
  })

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, id } = e.target

    if (isNumber(Number(value))) {
      setInputValues({ ...inputValues, [id]: value })
    }
  }

  const handleClick = (operation: keyof CalculatorApp) => () => {
    const first = Number(inputValues.first)
    const second = Number(inputValues.second)

    calculator[operation](first, second)
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    setInputValues({ first: '', second: '', result: calculator.getValue() })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="first">
          숫자1
          <input id="first" type="text" maxLength={3} value={inputValues.first} onChange={handleChange}/>
        </label>
      </div>
      <div>
        <button type="button" onClick={handleClick('sum')}>+</button>
        <button type="button" onClick={handleClick('subtract')}>-</button>
        <button type="button" onClick={handleClick('multiply')}>x</button>
        <button type="button" onClick={handleClick('division')}>%</button>
      </div>
      <div>
        <label htmlFor="second">
          숫자2
          <input id="second" type="text" maxLength={3} value={inputValues.second} onChange={handleChange}/>
        </label>
      </div>
      <button type="submit">제출</button>
      <div>
        <h3>결과</h3>
        <input id="result" type="text" value={inputValues.result}/>
      </div>
    </form>
  )
}