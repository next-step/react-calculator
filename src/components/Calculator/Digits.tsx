import { MouseEvent } from 'react';

import { DIGIT_MAX_NUMBER, ERROR_RESULT } from '../../constants/calculator';
import { OPERAND, useCalculator } from '../../context/calculator';

const DIGIT_NUMBERS = Array.from({ length: DIGIT_MAX_NUMBER + 1 }, (_, index) => DIGIT_MAX_NUMBER - index);

const Digits = () => {
  const {
    state: { operand1 },
    dispatch,
  } = useCalculator();

  const handleClickDigits = (e: MouseEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) return;

    const { num } = e.target.dataset;
    if (num === undefined) return;

    dispatch({ type: OPERAND, payload: Number(num) });
  };

  return (
    <div className="digits flex" onClick={handleClickDigits}>
      {DIGIT_NUMBERS.map((number) => {
        return (
          <button key={number} className="digit" type="button" disabled={operand1 === ERROR_RESULT} data-num={number}>
            {number}
          </button>
        );
      })}
    </div>
  );
};

export default Digits;
