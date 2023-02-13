import React from 'react';

interface DigitProps {
  number: number;
}

const Digit = ({ number }: DigitProps) => {
  return (
    <button type="button" className="digit" value={number}>
      {number}
    </button>
  );
};

export default Digit;
