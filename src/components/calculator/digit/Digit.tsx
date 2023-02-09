import React, { Dispatch, SetStateAction } from 'react';
import './Digit.css';

type PropsType = {
  calc: string;
  setCalc: Dispatch<SetStateAction<string>>;
};

const Digit = ({ calc, setCalc }: PropsType) => {
  const digitArr = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'];

  const onClickNumber = (e: any) => {
    if (calc[0] === '0') {
      setCalc((prev) => prev.slice(1));
    }

    setCalc((prev) => prev + e.target.value);

    if (calc.length === 3 || calc.length === 7) {
      alert('3자리 숫자만 가능합니다!');
      setCalc((prev) => prev.slice(0, -1));
    }
  };

  return (
    <div className="digits flex">
      {digitArr.map((data) => (
        <button
          onClick={onClickNumber}
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
