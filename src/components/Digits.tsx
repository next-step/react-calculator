import { DIGITS } from '@/constants';

type DigitsProps = {
  handleClickDigit: (value: number) => void;
};

const Digits = ({ handleClickDigit }: DigitsProps) => {
  return (
    <div className='digits flex'>
      {DIGITS.map((digit) => (
        <button
          key={digit}
          className='digit'
          onClick={() => handleClickDigit(digit)}
          role='button'
          data-testid={`digit-${digit}`}
        >
          {digit}
        </button>
      ))}
    </div>
  );
};

export default Digits;
