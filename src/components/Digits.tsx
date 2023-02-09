import React, { useState } from 'react';
import Button from './@common/Button';

const DIGITS = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] as const;

interface Props {
  setTotal: React.Dispatch<React.SetStateAction<string>>;
}

const Digits = ({ setTotal }: Props) => {
  const [digit, setDigit] = useState('');

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (digit.length >= 3) {
      alert('숫자는 세 자리까지만 입력 가능합니다!');
      return;
    }
    const { textContent } = e.target as HTMLButtonElement;
    setDigit((prev) => prev + textContent);
    setTotal((prev) => prev + textContent);
  };

  return (
    <div className="digits flex">
      {DIGITS.map((digit) => (
        <Button key={digit} className="digit" onClick={(e) => onClick(e)}>
          {digit}
        </Button>
      ))}
    </div>
  );
};

export default Digits;
