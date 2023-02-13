import React, { Dispatch, SetStateAction } from 'react';
import './Digit.css';
import { digitArr, operationArr } from '@/constants';

type Props = {
  calc: string;
  setCalc: Dispatch<SetStateAction<string>>;
};

const Digit = ({ calc, setCalc }: Props) => {
  const operationCheck = (str: string) => {
    let result = false;

    operationArr.forEach((data) => {
      if (str.includes(data)) {
        result = true;
      }
    });

    return result;
  };

  const onClickNumber = (value: string) => {
    if (calc[0] === '0') {
      setCalc((prev) => prev.slice(1));
    }

    setCalc((prev) => prev + value);
  };

  return (
    <div className="digits flex">
      {digitArr.map((data) => (
        <button
          onClick={() => onClickNumber(data)}
          value={data}
          className="digit"
          key={data}
        >
          {data}
        </button>
      ))}
    </div>
  );
};

export default Digit;
