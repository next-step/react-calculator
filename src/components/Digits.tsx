import React, { useState } from 'react';

const DIGITS = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

interface Props {
  onDigitClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Digits = ({ onDigitClick }: Props) => {
  return (
    <div className="digits flex">
      {DIGITS.map((digit) => (
        <button key={digit} className="digit" onClick={onDigitClick}>
          {digit}
        </button>
      ))}
    </div>
  );
};

export default Digits;