import React, { Dispatch, SetStateAction, useEffect } from 'react';
import './Digit.css';

import { digitArr } from '@/constants';

type Props = {
  calc: string;
  setCalc: Dispatch<SetStateAction<string>>;
};

const Digit = ({ calc, setCalc }: Props) => {
  const onClickNumber = (value: string) => {
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
