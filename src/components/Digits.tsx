import { DIGITS } from '@/constants';
import type { DigitType } from '@/types';

type DigitsProps = {
  onClickDigit: (value: DigitType) => void;
};

const Digits = ({ onClickDigit }: DigitsProps) => {
  return (
    <div className='digits flex'>
      {DIGITS.map((digit) => (
        <button
          key={digit}
          className='digit'
          onClick={() => onClickDigit(digit)}
        >
          {digit}
        </button>
      ))}
    </div>
  );
};

export default Digits;
