import React from "react";
import DigitButton from "../DigitButton";
import StatusPane from "../StatusPane";
import styles from "./index.module.css";

function Calculator() {
  const getClassNames = (styles = []) => styles.join(" ");
  const digitButtons = Array.from({ length: 10 }, (_, idx) => idx).sort((a, b) => b - a);

  return (
    <div className={styles.calculator}>
      <StatusPane>0</StatusPane>
      <div className={getClassNames([styles.digits, styles.flex])}>
        {digitButtons.map((number) => (
          <DigitButton>{number}</DigitButton>
        ))}
      </div>
      <div className={getClassNames([styles.modifiers, styles.subgrid])}>
        <button className="modifier">AC</button>
      </div>
      <div className={getClassNames([styles.operations, styles.subgrid])}>
        <button className="operation">/</button>
        <button className="operation">X</button>
        <button className="operation">-</button>
        <button className="operation">+</button>
        <button className="operation">=</button>
      </div>
    </div>
  );
}

export default Calculator;
