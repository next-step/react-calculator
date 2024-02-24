import { MouseEvent } from 'react';
import { DIGITS } from '../../../constants';

interface Props {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function Digits({ onClick }: Props) {
  return (
    <div className='digits flex'>
      {DIGITS.map((digit) => (
        <button key={digit} className='digit' onClick={onClick}>
          {digit}
        </button>
      ))}
    </div>
  );
}
