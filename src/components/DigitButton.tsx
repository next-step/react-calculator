import React from 'react';

type DigitButtonProps = {
  digit: number;
  onClick: (digit: number) => void;
};

function DigitButton({ digit, onClick }: DigitButtonProps) {
  const handleClick = () => {
    onClick(digit);
  };

  return (
    <button className="digit" onClick={handleClick}>
      {digit}
    </button>
  );
}

export default React.memo(DigitButton);
