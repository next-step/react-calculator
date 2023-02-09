import React from 'react';
import Button from './@common/Button';

const OPERATORS = ['/', 'X', '-', '+', '='];

interface Props {
  onOperationClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Operations = ({ onOperationClick }: Props) => {
  return (
    <div className="operations subgrid">
      {OPERATORS.map((operator) => (
        <Button key={operator} className="operation" onClick={onOperationClick}>
          {operator}
        </Button>
      ))}
    </div>
  );
};

export default Operations;
