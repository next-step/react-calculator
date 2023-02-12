import React from "react";
import Digit from "../Digit/Digit";

interface DigitsProps {
  setOperand: (numeric: number) => void;
}

export default function Digits({setOperand}: DigitsProps) {
  const nemerics = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

  return (
    <div className="digits flex">
      {nemerics.map((numeric, index) => (
        <Digit numeric={numeric} onClickDigit={() => setOperand(numeric)} />
      ))}
      ;
    </div>
  );
}
