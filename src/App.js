import "./index.css";

import { useState } from "react";

function App() {
  // 2개의 숫자에 대해 덧셈이 가능하다.
  // 1. 첫번째 숫자를 클릭한다.
  // 1-1. 첫번째 숫자인지를 알려면 어떻게 해야하지? => 화면이 빈값이라면 숫자를 추가한다.
  // 1-2. 숫자가 아니라 연산자를 클릭하면 어떻게 해야하지?
  // 1-3 연산자 별 클릭했을때 유형을 만들면 되겠다. => 화면이 빈값이라면 얼럿을 띄운다
  // 2. 화면에 첫번째 숫자가 뜬다.
  // 3. 덧셈 기호를 클릭한다.
  // 4. 화면에 첫번째 숫자와 + 가 같이 뜬다.
  // 5. 두번째 숫자를 클릭한다.
  // 6. 화면에 첫번째 숫자 + 두번째 숫자로 뜬다.
  // 7. = 기호를 누른다.
  // 7-1. 연산자 앞 뒤의 숫자를 잘라줄 방법을 찾아야 한다.
  // 8. 화면에 결과값이 나온다.
  const [screenNumber, setScreenNumber] = useState(0);

  const onClickNumber = (event) => {
    if (screenNumber === 0) {
      return setScreenNumber(event.target.value);
    }
    if (screenNumber.length === 3) {
      return alert("숫자는 세 자리까지만 입력 가능합니다!");
    }
    setScreenNumber((prev) => prev + event.target.value);
  };

  const onClickOperator = (event) => {
    if (screenNumber === 0) {
      return alert("숫자를 먼저 입력한 후 연산자를 입력해주세요!");
    }
    setScreenNumber((prev) => prev + event.target.value);
  };

  const onClickResult = () => {
    const plus = screenNumber.split("+");
    const minus = screenNumber.split("-");
    const multiply = screenNumber.split("X");
    const divide = screenNumber.split("/");

    if (screenNumber.includes("+") === true) {
      setScreenNumber(Number(plus[0]) + Number(plus[1]));
    }

    if (screenNumber.includes("-") === true)
      setScreenNumber(Number(minus[0]) - Number(minus[1]));

    if (screenNumber.includes("X") === true)
      setScreenNumber(Number(multiply[0]) * Number(multiply[1]));

    if (screenNumber.includes("/") === true)
      setScreenNumber(Math.floor(Number(divide[0]) / Number(divide[1])));
    if (
      Number(divide[0]) / Number(divide[1]) === Infinity ||
      Number(divide[0]) / Number(divide[1]) === -Infinity
    ) {
      setScreenNumber("오류");
    }
  };

  const onClickAllClear = () => {
    setScreenNumber(0);
  };
  return (
    <div id="app">
      <div className="calculator">
        <h1 id="total">{screenNumber}</h1>
        <div className="digits flex">
          <button value={9} className="digit" onClick={onClickNumber}>
            9
          </button>
          <button value={8} onClick={onClickNumber} className="digit">
            8
          </button>
          <button value={7} onClick={onClickNumber} className="digit">
            7
          </button>
          <button value={6} onClick={onClickNumber} className="digit">
            6
          </button>
          <button value={5} onClick={onClickNumber} className="digit">
            5
          </button>
          <button value={4} onClick={onClickNumber} className="digit">
            4
          </button>
          <button value={3} onClick={onClickNumber} className="digit">
            3
          </button>
          <button value={2} onClick={onClickNumber} className="digit">
            2
          </button>
          <button value={1} onClick={onClickNumber} className="digit">
            1
          </button>
          <button value={0} onClick={onClickNumber} className="digit">
            0
          </button>
        </div>
        <div className="modifiers subgrid">
          <button className="modifier" onClick={onClickAllClear}>
            AC
          </button>
        </div>
        <div className="operations subgrid">
          <button value={"/"} className="operation" onClick={onClickOperator}>
            /
          </button>
          <button value={"X"} className="operation" onClick={onClickOperator}>
            X
          </button>
          <button value={"-"} className="operation" onClick={onClickOperator}>
            -
          </button>
          <button value={"+"} className="operation" onClick={onClickOperator}>
            +
          </button>
          <button value={"="} className="operation" onClick={onClickResult}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
