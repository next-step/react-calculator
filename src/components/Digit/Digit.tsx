import React from "react";

interface DigitProps {
  numeric: number;
  onClickDigit: (num: number) => void;
}
const Digit = ({numeric, onClickDigit}: DigitProps) => {
  return (
    <button className="digit" onClick={() => onClickDigit(numeric)}>
      {numeric}
    </button>
  );
};

export default Digit;
