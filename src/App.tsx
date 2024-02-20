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
import OperatorButton from "./components/OperatorButton";

function App() {
  const [firstNumber, setFirstNumber] = useState<string>('');
  const [secondNumber, setSecondNumber] = useState<string>('');
  const [operator, setOperator] = useState<string>('');

  const NUMBERS = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

  return (
    <div id="app">
      <div className="calculator">
        <h1 id="total">0</h1>
        <div className="digits flex">
          {NUMBERS.map((number) => (
            <NumberButton
              key={number}
              setFirstNumber={setFirstNumber}
              firstNumber={firstNumber}
              setSecondNumber={setSecondNumber}
              secondNumber={secondNumber}
              operator={operator}
              value={number}
            />
          ))}
        </div>
        <div className="modifiers subgrid">
          <button className="modifier">AC</button>
        </div>
        <div className="operations subgrid">
          <OperatorButton setOperator={setOperator} value={"/"}/>
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
