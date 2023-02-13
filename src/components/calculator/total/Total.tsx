import React from 'react';
import './Total.css';

type Props = {
  calc: string;
};

const Total = ({ calc }: Props) => {
  return <h1 id="total">{calc || 0}</h1>;
};

export default Total;
