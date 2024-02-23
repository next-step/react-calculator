import styled from '.././css/index.module.css';

type Props = {
  onDigitsClick: (digit: number) => void;
};

export default function Digits({ onDigitsClick }: Props) {
  return (
    <div className={styled.digits}>
      {Array.from({ length: 10 }, (_, i) => 9 - i).map((digit) => (
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
