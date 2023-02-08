import React from 'react';

interface DigitProps {
  number: number;
}

const Digit = ({ number }: DigitProps) => {
  return <button className="digit">{number}</button>;
};

export default Digit;
