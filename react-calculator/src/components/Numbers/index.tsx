import React from "react";

interface Props {
  numHandler: (num: number) => void;
}

const range = (limit: number) => {
  const result = [];
  for (let i = 0; i < limit; i++) {
    result.push(i);
  }
  return result;
};

const Numbers = (props: Props) => {
  const { numHandler } = props;
  const numbers = range(10).reverse();
  return (
    <div className="digits flex">
      {numbers.map((number) => (
        <button className="digit" onClick={() => numHandler(number)}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default Numbers;
