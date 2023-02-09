import React from 'react';

import { DIGITS } from '../constants/calculate';

interface Props {
  onDigitClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const DigitButtons = ({ onDigitClick }: Props) => {
  return (
    <>
      {DIGITS.map((digit) => (
        <button key={digit} className="digit" onClick={onDigitClick}>
          {digit}
        </button>
      ))}
    </>
  );
};

export default DigitButtons;
