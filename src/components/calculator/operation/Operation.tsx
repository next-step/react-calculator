import React, { Dispatch, SetStateAction } from 'react';
import './Operation.css';

import { operationArr } from '@/constants';

import changeDecimal from '@/lib';

type Props = {
  calc: string;
  setCalc: Dispatch<SetStateAction<string>>;
};

const Operation = ({ calc, setCalc }: Props) => {
  const onClickOperation = (value: string) => {
    setCalc((prev) => prev + value);
  };

  const onClickResult = () => {
    if (calc.includes('+')) {
      const result = calc.split('+');

      return changeDecimal(result[0]) + changeDecimal(result[1]) === Infinity
        ? setCalc('오류')
        : setCalc(
            (changeDecimal(result[0]) + changeDecimal(result[1])).toString()
          );
    }

    if (calc.includes('-')) {
      const result = calc.split('-');
      return changeDecimal(result[0]) - changeDecimal(result[1]) === Infinity
        ? setCalc('오류')
        : setCalc(
            (changeDecimal(result[0]) - changeDecimal(result[1])).toString()
          );
    }

    if (calc.includes('x')) {
      const result = calc.split('x');
      return changeDecimal(result[0]) * changeDecimal(result[1]) === Infinity
        ? setCalc('오류')
        : setCalc(
            (changeDecimal(result[0]) * changeDecimal(result[1])).toString()
          );
    }

    if (calc.includes('/')) {
      const result = calc.split('/');
      return changeDecimal(result[0]) / changeDecimal(result[1]) === Infinity
        ? setCalc('오류')
        : setCalc(
            (changeDecimal(result[0]) / changeDecimal(result[1])).toString()
          );
    }
  };

  return (
    <div className="operations subgrid">
      {operationArr.map((data) => (
        <button onClick={() => onClickOperation(data)} value={data} key={data}>
          {data}
        </button>
      ))}

      <button onClick={onClickResult}>=</button>
    </div>
  );
};

export default Operation;
