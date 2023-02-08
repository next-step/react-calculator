import React from 'react';
import Digit from './Digit';

const index = () => {
  const digitList = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

  return (
    <div className="digits flex">
      {digitList.map((number) => {
        return <Digit key={number} number={number} />;
      })}
    </div>
  );
};

export default index;
