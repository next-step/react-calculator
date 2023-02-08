import "./index.css";

import { useState } from "react";

function App() {
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
