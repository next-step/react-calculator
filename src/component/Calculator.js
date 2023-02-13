import React, { useState } from "react";
import { OPERATORS, MAX_NUMBER } from "../const";
import DigitButtons from "./DigitButtons";
import ModifierButtons from "./ModifierButtons";
import OperationButtons from "./OperationButtons";
import "../css/index.css";

// TODO : 기능 분리하기

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
    if (
      className !== "digit" &&
      className !== "modifier" &&
      className !== "operation"
    )
      return;

    if (inputText === "AC") {
      setCalc("0");
      return;
    }

    // 연산자만, 연산자 연속 입력 불가능
    const lastChar = calc.slice(-1);
    if (OPERATORS.includes(lastChar) && isNaN(inputText)) return;

    if (calc === "0" || calc === "오류") {
      if (e.target.className === "operation") return;
      setCalc(inputText);
      return;
    }

    if (Number((calc + inputText).slice(-4)) >= MAX_NUMBER) {
      alert("세 자리 수 이상은 입력할 수 없습니다!");
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
