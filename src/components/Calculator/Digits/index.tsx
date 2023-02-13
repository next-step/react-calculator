import React from 'react';
import { useCalculator } from '../../../modules/context/Calculator/CalculatorContext';
import Digit from './Digit';

const digitList = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const MAX_DIGIT_LENGTH = 3;

const Digits = () => {
  const { calculator, addFirstDigit, addSecondDigit } = useCalculator();

  const handleDigitClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (
      calculator.firstDigits.length < MAX_DIGIT_LENGTH &&
      !calculator.operation
    ) {
      addFirstDigit(e.currentTarget.value);
    } else if (calculator.secondDigits.length < MAX_DIGIT_LENGTH) {
      addSecondDigit(e.currentTarget.value);
    }
  };

  return (
    <div className="digits flex">
      {digitList.map((number) => {
        return (
          <Digit key={number} number={number} onClick={handleDigitClick} />
        );
      })}
    </div>
  );
};

export default Digits;
