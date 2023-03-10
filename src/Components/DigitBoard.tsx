import DigitButton from './DigitButton';

const digits = Array(10).fill(null).map((_, index) => index.toString()).reverse();

interface DigitProps {
  setDigit(number: string): void;
}

function DigitBoard({ setDigit }: DigitProps) {
  return (
    <div className="digits flex">
      {digits.map((digit) => 
        <DigitButton
          number={digit}
          setDigit={setDigit}
        />
      )}
    </div>
  )
}

export default DigitBoard;