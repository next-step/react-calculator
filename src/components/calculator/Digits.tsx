import React, { useContext } from 'react';

import Button from '../@common/Button';
import { CalculatorContext } from './Calculator';

import { REDUCER_TYPE } from '../../hooks/useCalculate';
import { MESSAGES } from '../../constants/messages';
import { MAX_INPUT_NUMBER } from '../../constants/calculate';

export const DIGITS = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

const Digits = () => {
  const { total, currentNumber, dispatch } = useContext(CalculatorContext);

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { textContent } = e.target as HTMLDivElement;
    const input = currentNumber + textContent;
    const isZeroEntered = currentNumber[0] === '0' && textContent === '0';

    if (input.length > MAX_INPUT_NUMBER) {
      return alert(MESSAGES.DIGIT.MAX_LENGTH);
    }
    if (isZeroEntered) {
      return;
    }

    dispatch({
      type: REDUCER_TYPE.INPUT_DIGIT,
      payload: {
        total: !total && currentNumber ? input : total + textContent,
        currentNumber: input,
      },
    });
  };
  return (
    <div className="digits flex" onClick={onClick}>
      {DIGITS.map((digit) => (
        <Button key={digit} className="digit">
          {digit}
        </Button>
      ))}
    </div>
  );
};

export default Digits;
