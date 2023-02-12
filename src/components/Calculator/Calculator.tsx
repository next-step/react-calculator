import React from "react";
import AllClearButton from "../AllClearButton/AllClearButton";
import Digits from "../Digits/Digits";
import Operations from "../Operations/Operations";
import Total from "../Total/Total";
import styles from "./Calculator.module.css";
import {useCalculate} from "../../hooks/useCalculate";

export default function Calculator() {
  const [reducer, onPressValue, reset] = useCalculate();

  return (
    <div className="calculator">
      <Total total={reducer[1]} />
      <div className="modifiers subgrid">
        <AllClearButton onClick={reset} />
      </div>
      <Digits onClick={onPressValue} />
      <Operations onClick={onPressValue} />
    </div>
  );
}
