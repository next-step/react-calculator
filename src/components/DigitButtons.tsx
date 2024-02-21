import { CALCULATOR } from "data/constant";

import DigitButton from "components/DigitButton";

export default function DigitButtons() {
  return (
    <div className="digits flex">
      {CALCULATOR.DIGITS.map((digit) => (
        <DigitButton key={digit} digit={digit} />
      ))}
    </div>
  );
}
