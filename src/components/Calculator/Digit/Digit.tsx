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

export type DigitNumbers =
  | '9'
  | '8'
  | '7'
  | '6'
  | '5'
  | '4'
  | '3'
  | '2'
  | '1'
  | '0';

const DIGIT_NUMBERS: ReadonlyArray<DigitNumbers> = [
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
];
