import React from 'react';

type DigitButtonProps = {
  digit: number;
  insertDigit: (digit: number) => void;
};

function DigitButton({ digit, insertDigit }: DigitButtonProps) {
  const handleClick = () => {
    insertDigit(digit);
  };

  return (
    <button className="digit" onClick={handleClick}>
      {digit}
    </button>
  );
}

export default React.memo(DigitButton);
