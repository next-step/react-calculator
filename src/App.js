import "./index.css";

import { useState } from "react";

function App() {
  const [screenNumber, setScreenNumber] = useState(0);

  const onClickNumber = (event) => {
    if (screenNumber === 0) {
      return setScreenNumber(event.target.textContent);
    }
    if (screenNumber.length === 3) {
      return alert("숫자는 세 자리까지만 입력 가능합니다!");
    }
    setScreenNumber((prev) => prev + event.target.textContent);
  };

  const onClickOperator = (event) => {
    if (screenNumber === 0) {
      return alert("숫자를 먼저 입력한 후 연산자를 입력해주세요!");
    }
    setScreenNumber((prev) => prev + event.target.textContent);
  };

  const onClickResult = () => {
    const [plusLeft, plusRight] = screenNumber.split("+").map(Number);
    const [minusLeft, minusRight] = screenNumber.split("-").map(Number);
    const [multiplyLeft, multiplyRight] = screenNumber.split("X").map(Number);
    const [divideLeft, divideRight] = screenNumber.split("/").map(Number);
    const divideResult = divideLeft / divideRight;

    if (screenNumber.includes("+") === true) {
      setScreenNumber(plusLeft + plusRight);
    }

    if (screenNumber.includes("-") === true)
      setScreenNumber(minusLeft - minusRight);

    if (screenNumber.includes("X") === true)
      setScreenNumber(multiplyLeft * multiplyRight);

    if (screenNumber.includes("/") === true)
      setScreenNumber(Math.floor(divideResult));
    if (divideResult === Infinity || divideResult === -Infinity)
      setScreenNumber("오류");
  };

  const onClickAllClear = () => {
    setScreenNumber(0);
  };
  return (
    <div id="app">
      <div className="calculator">
        <h1 id="total">{screenNumber}</h1>
        <div className="digits flex">
          <button className="digit" onClick={onClickNumber}>
            9
          </button>
          <button onClick={onClickNumber} className="digit">
            8
          </button>
          <button onClick={onClickNumber} className="digit">
            7
          </button>
          <button onClick={onClickNumber} className="digit">
            6
          </button>
          <button onClick={onClickNumber} className="digit">
            5
          </button>
          <button onClick={onClickNumber} className="digit">
            4
          </button>
          <button onClick={onClickNumber} className="digit">
            3
          </button>
          <button onClick={onClickNumber} className="digit">
            2
          </button>
          <button onClick={onClickNumber} className="digit">
            1
          </button>
          <button onClick={onClickNumber} className="digit">
            0
          </button>
        </div>
        <div className="modifiers subgrid">
          <button className="modifier" onClick={onClickAllClear}>
            AC
          </button>
        </div>
        <div className="operations subgrid">
          <button className="operation" onClick={onClickOperator}>
            /
          </button>
          <button className="operation" onClick={onClickOperator}>
            X
          </button>
          <button className="operation" onClick={onClickOperator}>
            -
          </button>
          <button className="operation" onClick={onClickOperator}>
            +
          </button>
          <button className="operation" onClick={onClickResult}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
