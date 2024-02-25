import { DIGITS } from '@/constants';
import type { DigitType } from '@/types';

type DigitsProps = {
  handleClickDigit: (value: DigitType) => void;
};

const Digits = ({ handleClickDigit }: DigitsProps) => {
  return (
    <div className='digits flex'>
      {DIGITS.map((digit) => (
        <button
          key={digit}
          className='digit'
          onClick={() => handleClickDigit(digit)}
        >
          {digit}
        </button>
      ))}
    </div>
  );
};

export default Digits;
