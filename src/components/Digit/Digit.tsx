import React from "react";

interface DigitProps {
  numeric: number;
  onClickDigit: () => void;
}

export default function Digit({numeric, onClickDigit}: DigitProps) {
  return (
    <button className="digit" onClick={onClickDigit}>
      {numeric}
    </button>
  );
}
