import { CALCULATOR_MAX_DIGIT } from "@/constant";

interface DigitProps {
  onClick: (digit: number) => void;
}

const Digit = ({ onClick }: DigitProps) => {
  const digits = Array.from(
    { length: 10 },
    (_, index) => CALCULATOR_MAX_DIGIT - index
  );

  return (
    <div className="digits flex">
      {digits.map((digit) => (
        <button key={digit} className="digit" onClick={() => onClick(digit)}>
          {digit}
        </button>
      ))}
    </div>
  );
};

export default Digit;
