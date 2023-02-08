import React from 'react';

interface DigitProps {
  number: number;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Digit = ({ number, onClick }: DigitProps) => {
  return (
    <button type="button" className="digit" onClick={onClick} value={number}>
      {number}
    </button>
  );
};

export default Digit;
