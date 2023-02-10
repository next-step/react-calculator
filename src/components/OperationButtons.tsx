import React from 'react';

import { OPERATORS } from '../constants/calculate';

interface Props {
  onOperationClick: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const OperationButtons = ({ onOperationClick }: Props) => {
  return (
    <>
      {OPERATORS.map((operator) => (
        <button key={operator} className="operation" onClick={onOperationClick}>
          {operator}
        </button>
      ))}
    </>
  );
};

export default OperationButtons;
