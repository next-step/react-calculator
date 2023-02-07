import React from 'react';
import './Digit.css';

const Digit = () => {
  const digitArr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

  return (
    <div className="digits flex">
      {digitArr.map((data) => (
        <button className="digit" key={data}>
          {data}
        </button>
      ))}
    </div>
  );
};

export default Digit;
