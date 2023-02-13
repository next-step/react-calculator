import React from 'react';

// 버튼을 눌르면 Total Component가 업데이트
type DigitProps = {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Digit = ({ handleClick }: DigitProps) => {
  const digits = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

  return (
    <div className="digits flex">
      {digits.map((digit) => (
        <button value={digit} key={digit} onClick={handleClick}>
          {digit}
        </button>
      ))}
    </div>
  );
};

export default Digit;
