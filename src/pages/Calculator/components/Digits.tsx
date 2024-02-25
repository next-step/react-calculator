import { MouseEvent } from 'react';
import { DIGITS } from '../../../constants';

interface Props {
  handleDigit: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function Digits({ handleDigit }: Props) {
  return (
    <div className='digits flex'>
      {DIGITS.map((digit) => (
        <button key={digit} className='digit' onClick={handleDigit}>
          {digit}
        </button>
      ))}
    </div>
  );
}
