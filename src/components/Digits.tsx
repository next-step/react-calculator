import styled from '.././css/index.module.css';
import { DIGITS } from '../constant/calculator';

type Props = {
  onDigitsClick: (digit: number) => void;
};

export default function Digits({ onDigitsClick }: Props) {
  return (
    <div className={styled.digits}>
      {DIGITS.map((digit) => (
        <button
          key={digit}
          className={styled.digit}
          onClick={() => onDigitsClick(digit)}
        >
          {digit}
        </button>
      ))}
    </div>
  );
}
