import {useState} from 'react'
import Button from "./Button.tsx"

import Display from "./Display.tsx"

import calculate from "../caculator/calculator.ts"
import {checkContinuousOperand, checkInputStartOperand, hasConsecutiveLimitDigits} from "../caculator/validator.ts"
import '../css/index.css'


function App() {
    const [displayValue, setDisplayValue] = useState<string>("0")

    function display(buttonValue: string) {
        if (displayValue === "0") {
            setDisplayValue(buttonValue)
        } else {
            setDisplayValue(prevValue => prevValue + buttonValue)
        }
    }

    const handleClick = (buttonValue: string) => {
        if (checkContinuousOperand(displayValue[displayValue.length - 1], buttonValue) || checkInputStartOperand(displayValue[displayValue.length - 1], buttonValue)) {
            alert('숫자를 먼저 입력한 후 연산자를 입력해주세요!')
            return
        } else if (hasConsecutiveLimitDigits(displayValue + buttonValue)) {
            alert("숫자는 세 자리까지만 입력 가능합니다!")
            return
        }

        switch (buttonValue) {
            case "AC":
                setDisplayValue("0");
                break;
            case "=":
                const calculateString = displayValue + buttonValue;
                setDisplayValue(calculate(calculateString));
                break;
            default:
                display(buttonValue);
        }

    }

    return (
        <div id="app">
            <div className="calculator">
                <Display value={displayValue}/>
                <div className="digits flex">
                    <Button onClick={() => handleClick("9")} text="9"/>
                    <Button onClick={() => handleClick("8")} text="8"/>
                    <Button onClick={() => handleClick("7")} text="7"/>
                    <Button onClick={() => handleClick("6")} text="6"/>
                    <Button onClick={() => handleClick("5")} text="5"/>
                    <Button onClick={() => handleClick("4")} text="4"/>
                    <Button onClick={() => handleClick("3")} text="3"/>
                    <Button onClick={() => handleClick("2")} text="2"/>
                    <Button onClick={() => handleClick("1")} text="1"/>
                    <Button onClick={() => handleClick("0")} text="0"/>
                </div>
                <div className="modifiers subgrid">
                    <Button onClick={() => handleClick("AC")} text="AC"/>
                </div>
                <div className="operations subgrid">
                    <Button onClick={() => handleClick("/")} text="/"/>
                    <Button onClick={() => handleClick("X")} text="X"/>
                    <Button onClick={() => handleClick("-")} text="-"/>
                    <Button onClick={() => handleClick("+")} text="+"/>
                    <Button onClick={() => handleClick("=")} text="=" id="equal-sign"/>
                </div>
            </div>
        </div>
    )
}

export default App
