import React, { Dispatch, SetStateAction } from 'react';
import './Operation.css';

type PropsType = {
  calc: string;
  setCalc: Dispatch<SetStateAction<string>>;
};

const Operation = ({ calc, setCalc }: PropsType) => {
  const operationArr = ['/', 'x', '-', '+'];

  const onClickOperation = (e: any) => {
    setCalc((prev) => prev + e.target.value);
  };

  const onClickResult = () => {
    if (calc.includes('+')) {
      const result = calc.split('+');
      return setCalc(
        (parseInt(result[0], 10) + parseInt(result[1], 10)).toString()
      );
    }

    if (calc.includes('-')) {
      const result = calc.split('-');
      return setCalc(
        (parseInt(result[0], 10) - parseInt(result[1], 10)).toString()
      );
    }

    if (calc.includes('x')) {
      const result = calc.split('x');
      return setCalc(
        (parseInt(result[0], 10) * parseInt(result[1], 10)).toString()
      );
    }

    if (calc.includes('/')) {
      const result = calc.split('/');
      return setCalc(
        (parseInt(result[0], 10) / parseInt(result[1], 10)).toString()
      );
    }
  };

  return (
    <div className="operations subgrid">
      {operationArr.map((data) => (
        <button onClick={onClickOperation} value={data} key={data}>
          {data}
        </button>
      ))}

      <button onClick={onClickResult}>=</button>
    </div>
  );
};

export default Operation;
