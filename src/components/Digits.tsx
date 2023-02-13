import { MouseEvent } from "react";

const DIGIT_NUMBERS = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] as const;

type DigitsProps = {
  handleDigits: (e: MouseEvent<HTMLDivElement>) => void;
};

function Digits({ handleDigits }: DigitsProps) {
  return (
    <div className="digits flex" onClick={handleDigits}>
      {DIGIT_NUMBERS.map((digit) => (
        <button key={digit} className="digit" name={`${digit}`} value={digit}>
          {digit}
        </button>
      ))}
    </div>
  );
}

export default Digits;
