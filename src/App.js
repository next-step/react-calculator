import React, { useState } from "react";
import "./css/index.css";
import { operators } from "./const";
import DigitButtons from "./component/DigitButtons";
import ModifierButtons from "./component/ModifierButtons";
import OperationButtons from "./component/OperationButtons";

// TODO : key는 어떤 값으로 지정할까?
// Caculator를 분리할까? 그러기엔 total은 클릭 영역이 아님

function App() {
  const [calc, setCalc] = useState("0");

  const getResult = (e) => {
    let replace_str = calc.replace(/X/gi, "*");
    if (isNaN(eval(replace_str))) return setCalc("0");
    if (eval(replace_str) == Infinity) return setCalc("오류");
    setCalc(eval(replace_str).toFixed(0));
  };

  const setResult = (e) => {
    const inputText = e.target.innerText;
    const className = e.target.className;
    if (
      className != "digit" &&
      className != "modifier" &&
      className != "operation"
    )
      return;

    if (inputText == "AC") return setCalc("0");

    // 연산자만, 연산자 연속 입력 불가능
    const lastChar = calc.slice(-1);
    if (operators.includes(lastChar) && isNaN(inputText)) return;

    if (calc == "0" || calc == "오류") {
      if (e.target.className == "operation") return;
      setCalc("");
    }

    // 세 자리 수 이상 불가능
    if (Number((calc + inputText).slice(-4)) >= 1000) {
      alert("세 자리 수 이상은 입력할 수 없습니다!");
      return;
    }

    if (inputText == "=") return getResult(e);

    setCalc((prev) => {
      return prev + inputText;
    });
  };

  return (
    <div id="app">
      <div className="calculator" onClick={setResult}>
        <h1 id="total">{calc}</h1>
        <DigitButtons />
        <ModifierButtons />
        <OperationButtons />
      </div>
    </div>
  );
}

export default App;
