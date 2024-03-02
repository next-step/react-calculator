import { useState } from 'react'
import Button from "./Button.tsx"

import Display from "./Display.tsx"

import calculate, {hasConsecutiveFourDigits} from "../apis/calculator.ts"


function App() {
    const [displayValue, setDisplayValue] = useState<string>("")


    const handleClick = (buttonValue: string) => {
        if (buttonValue === "") {
            setDisplayValue("")
            return
        }

        const lastChar = displayValue[displayValue.length - 1]

        const isLastCharOperator = ['+', '-', '*', '/'].includes(lastChar)


        if (isLastCharOperator && ['+', '-', '*', '/'].includes(buttonValue)) {
            alert('숫자를 먼저 입력한 후 연산자를 입력해주세요!')

            return
        }


        if (buttonValue === "=") {
            const calculateString = displayValue + buttonValue
            setDisplayValue(calculate(calculateString))
            return
        }


        if(hasConsecutiveFourDigits(displayValue + buttonValue)) {
            alert("숫자는 세 자리까지만 입력 가능합니다!")

            return
        }
        setDisplayValue(prevValue => prevValue + buttonValue)

    }



    return (
    <div className="">
        <Display value={displayValue} />
        <Button onClick={() => handleClick("1")} text="1"/>
        <Button onClick={() => handleClick("2")} text="2"/>
        <Button onClick={() => handleClick("3")} text="3"/>
        <Button onClick={() => handleClick("4")} text="4"/>
        <Button onClick={() => handleClick("5")} text="5"/>
        <Button onClick={() => handleClick("6")} text="6"/>
        <Button onClick={() => handleClick("7")} text="7"/>
        <Button onClick={() => handleClick("8")} text="8"/>
        <Button onClick={() => handleClick("9")} text="9"/>
        <Button onClick={() => handleClick("0")} text="0"/>
        <Button onClick={() => handleClick("+")} text="+"/>
        <Button onClick={() => handleClick("-")} text="-"/>
        <Button onClick={() => handleClick("*")} text="*"/>
        <Button onClick={() => handleClick("/")} text="/"/>
        <Button onClick={() => handleClick("=")} text="="/>
        <Button onClick={() => handleClick("")} text="AC"/>
    </div>
  )
}

export default App
