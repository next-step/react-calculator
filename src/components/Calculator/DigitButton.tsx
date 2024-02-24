import { Digit, useCalculate } from './CalculatorProvider';

interface DigitButtonProps {
  number: Digit;
}

export default function DigitButton({ number }: DigitButtonProps) {
  const calculate = useCalculate();

  return (
    <button
      className="digit"
      onClick={() => {
        calculate?.appendNumberToProcess(number);
      }}
    >
      {number}
    </button>
  );
}
