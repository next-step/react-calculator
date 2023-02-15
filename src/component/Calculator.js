import React, { useState } from "react";
import { OPERATORS, MAX_NUMBER, MESSAGE } from "../const";
import DigitButtons from "./DigitButtons";
import ModifierButtons from "./ModifierButtons";
import OperationButtons from "./OperationButtons";
import "../css/index.css";

// TODO : custom hooks로 기능 분리하기 (useCalculate)
// TODO :  계산과 검증로직 분리

export default function Calculator() {
  const [calc, setCalc] = useState("0");

  const getResult = () => {
    const replace_str = calc.replace(/X/gi, "*");
    if (isNaN(eval(replace_str))) {
      return "0";
    }
    if (eval(replace_str) === Infinity || eval(replace_str) === -Infinity) {
      return "오류";
    }
    return eval(replace_str).toFixed(0);
  };

  const setResult = (e) => {
    const inputText = e.target.innerText;
    const className = e.target.className;

    if (inputText === "AC") {
      setCalc("0");
      return;
    }

    const lastChar = calc.slice(-1);
    if (OPERATORS.includes(lastChar) && isNaN(inputText)) return;

    if (calc === "0" || calc === "오류") {
      if (className === "operation") return;
      setCalc(inputText);
      return;
    }

    if (Number((calc + inputText).slice(-4)) > MAX_NUMBER) {
      alert(MESSAGE.MAX_NUMBER);
      return;
    }

    if (inputText === "=") {
      const resultText = getResult();
      setCalc(resultText);
      return;
    }

    setCalc((prev) => {
      return prev + inputText;
    });
  };

  return (
    <div className="calculator">
      <h1 id="total">{calc}</h1>
      <DigitButtons onClick={setResult} />
      <ModifierButtons onClick={setResult} />
      <OperationButtons onClick={setResult} />
    </div>
  );
}
