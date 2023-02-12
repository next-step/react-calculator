import React from "react";
import styles from "./Digit.module.css";

interface DigitProps {
  numeric: number;
  onClickDigit: (num: number) => void;
}
const Digit = ({numeric, onClickDigit}: DigitProps) => {
  return (
    <button className={styles.digit} onClick={() => onClickDigit(numeric)}>
      {numeric}
    </button>
  );
};

export default Digit;
