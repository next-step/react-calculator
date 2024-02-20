// - [ ] 2개의 숫자에 대해 덧셈이 가능하다.
// - [ ] 2개의 숫자에 대해 뺄셈이 가능하다.
// - [ ] 2개의 숫자에 대해 곱셈이 가능하다.
// - [ ] 2개의 숫자에 대해 나눗셈이 가능하다.
// - [ ] AC(All Clear)버튼을 누르면 0으로 초기화 한다.
// - [ ] 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
// - [ ] 계산 결과를 표현할 때 소수점 이하는 버림한다.
// - [ ] 연산의 결과값이 `Infinity`일 경우 `오류`라는 문자열을 보여준다. (아이폰 참고)

import { useState } from "react"

import NumberButton from "./components/NumberButton";

function App() {
  const [firstNumber, setFirstNumber] = useState<string>('');
  const [secondNumber, setSecondNumber] = useState<string>('');
  const [operator, setOperator] = useState<string>('');

  return (  
    <div id="app">
      <div className="calculator">
        <h1 id="total">0</h1>
        <div className="digits flex">
          <NumberButton 
            setFirstNumber={setFirstNumber}
            firstNumber={firstNumber}
            setSecondNumber={setSecondNumber}
            secondNumber={secondNumber}
            operator={operator}
            value={9}
          />
          <button className="digit">8</button>
          <button className="digit">7</button>
          <button className="digit">6</button>
          <button className="digit">5</button>
          <button className="digit">4</button>
          <button className="digit">3</button>
          <button className="digit">2</button>
          <button className="digit">1</button>
          <button className="digit">0</button>
        </div>
        <div className="modifiers subgrid">
          <button className="modifier">AC</button>
        </div>
        <div className="operations subgrid">
          <button className="operation">/</button>
          <button className="operation">X</button>
          <button className="operation">-</button>
          <button className="operation">+</button>
          <button className="operation">=</button>
        </div>
      </div>
    </div>
  )
}

export default App
