import React, { useContext } from 'react';

import Button from '../@common/Button';
import { CalculatorContext } from './Calculator';

import { REDUCER_TYPE } from '../../hooks/useCalculate';
import { MESSAGES } from '../../constants/messages';
import { DIGITS, MAX_INPUT_NUMBER } from '../../constants/calculate';

const Digits = () => {
  const { total, currentNumber, dispatch } = useContext(CalculatorContext);

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { textContent } = e.target as HTMLDivElement;
    const input = currentNumber + textContent;

    if (input.length > MAX_INPUT_NUMBER) {
      return alert(MESSAGES.DIGIT.MAX_LENGTH);
    }
    if (currentNumber === '' && textContent === '0') {
      return;
    }

    dispatch({
      type: REDUCER_TYPE.INPUT_DIGIT,
      payload: {
        total:
          !total && currentNumber
            ? currentNumber + textContent
            : total + textContent,
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
