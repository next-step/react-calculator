import React from "react";

interface Props {
  value: number;
}

const Result = (props: Props) => {
  const { value } = props;
  return <h1 id="total">{value}</h1>;
};

export default Result;
