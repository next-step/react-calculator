import React from "react";
import {NUMERICS} from "../../constants/Calcurator";
import Digit from "../Digit/Digit";
import styles from "./Digits.module.css";

interface DigitsProps {
  onClick: (num: number) => void;
}

const Digits = ({onClick}: DigitsProps) => {
  const nemerics = NUMERICS;
  return (
    <div className={`${styles.digits}`}>
      {nemerics.map((numeric) => (
        <Digit numeric={numeric} onClickDigit={onClick} key={numeric} />
      ))}
      ;
    </div>
  );
};

export default Digits;
