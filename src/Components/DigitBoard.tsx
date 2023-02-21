import DigitButton from './DigitButton';

const digits = [9, 8, 7, 6, 5, 4, 3, 2, 1] as const;

function DigitBoard() {
  return (
    <div className="digits flex">
      {digits.map((digit) => 
        <DigitButton
          number={digit}
        />
      )}
    </div>
  )
}

export default DigitBoard;