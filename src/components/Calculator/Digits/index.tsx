import React from 'react';
import Digit from './Digit';

const index = () => {
  const digitList = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

  const handleDigitClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value);
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

export default index;
