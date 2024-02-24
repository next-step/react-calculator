import { CALCULATOR } from "data/constant";

import DigitButton from "components/digit/DigitButton";

interface DigitButtonsProps {
  onDigitClick: (value: string) => void;
}

export default function DigitButtons({ onDigitClick }: DigitButtonsProps) {
  return (
    <div className="digits flex">
      {CALCULATOR.DIGITS.map((digit) => (
        <DigitButton
          key={digit}
          digit={digit}
          onDigitClick={(digit) => onDigitClick(digit)}
        />
      ))}
    </div>
  );
}
