import React from "react";

interface DigitProps {
  numeric: number;
  onClickDigit: () => void;
}
const Digit = ({numeric, onClickDigit}: DigitProps) => {
  return (
    <button className="digit" onClick={onClickDigit}>
      {numeric}
    </button>
  );
};

export default Digit;
