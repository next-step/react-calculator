import DigitButton from './DigitButton';

const digits = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"] as const;

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