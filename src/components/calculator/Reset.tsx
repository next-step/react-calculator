import React, { useContext } from 'react';
import { CalculatorContext } from './Calculator';
import { REDUCER_TYPE } from '../../hooks/useCalculate';

const Reset = () => {
  const { dispatch } = useContext(CalculatorContext);

  const onClick = () => {
    dispatch({ type: REDUCER_TYPE.RESET });
  };
  return (
    <div className="modifiers subgrid">
      <button className="modifier" onClick={onClick}>
        AC
      </button>
    </div>
  );
};

export default Reset;
