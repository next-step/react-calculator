import './digit.css';

const Digit = ({ appendDigit }: { appendDigit: (n: DigitNumbers) => void }) => {
  return (
    <div className="digits flex">
      {DIGIT_NUMBERS.map((number) => (
        <button
          className="digit"
          key={number}
          onClick={() => appendDigit(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Digit;

const DIGIT_NUMBERS = [
  '9',
  '8',
  '7',
  '6',
  '5',
  '4',
  '3',
  '2',
  '1',
  '0',
] as const;
export type DigitNumbers = (typeof DIGIT_NUMBERS)[number];
