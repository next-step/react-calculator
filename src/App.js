import React, { useState } from "react";
import "./css/index.css";
import Button from "./component/Button";

// TODO : key는 어떤 값으로 지정할까?
// Caculator를 분리할까? 그러기엔 total은 클릭 영역이 아님

function App() {
  const digits = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];
  const operators = ["/", "X", "-", "+", "="];
  const [calc, setCalc] = useState("0");

  const getResult = (e) => {
    let replace_str = calc.replace(/X/gi, "*");
    if (isNaN(eval(replace_str))) return setCalc("0");
    else if (eval(replace_str) == Infinity) return setCalc("오류");
    else setCalc(eval(replace_str).toFixed(0));
  };

  const setResult = (e) => {
    if (
      e.target.className != "digit" &&
      e.target.className != "modifier" &&
      e.target.className != "operation"
    )
      return;

    if (e.target.innerText == "AC") return setCalc("0");

    // 연산자만, 연산자 연속 입력 불가능
    const lastChar = calc.slice(-1);
    if (
      (lastChar == "/" ||
        lastChar == "X" ||
        lastChar == "-" ||
        lastChar == "+") &&
      isNaN(e.target.innerText)
    )
      return;

    if (calc == "0" || calc == "오류") {
      if (e.target.className == "operation") return;
      setCalc("");
    }

    // 세 자리 수 이상 불가능
    if (Number((calc + e.target.innerText).slice(-4)) >= 1000) {
      alert("세 자리 수 이상은 입력할 수 없습니다!");
      return;
    }

    if (e.target.innerText == "=") return getResult(e);

    setCalc((prev) => {
      return prev + e.target.innerText;
    });
  };

  // key id 배정 방식
  const digitButtons = digits.map((v) => (
    <Button className="digit" key={v} value={v} />
  ));
  const operationButtons = operators.map((v) => (
    <Button className="operation" key={v} value={v} />
  ));

  return (
    <div id="app">
      <div className="calculator" onClick={setResult}>
        <h1 id="total" value={calc}>
          {calc}
        </h1>
        <div className="digits flex">{digitButtons}</div>
        <div className="modifiers subgrid">
          <Button className="modifier" value="AC" />
        </div>
        <div className="operations subgrid">{operationButtons}</div>
      </div>
    </div>
  );
}

export default App;
