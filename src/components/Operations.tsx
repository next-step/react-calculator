import React from 'react';

const OPERATORS = ['/', 'X', '-', '+'];

interface Props {
  onOperationClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onSummaryClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Operations = ({ onOperationClick, onSummaryClick }: Props) => {
  return (
    <div className="operations subgrid">
      {OPERATORS.map((operator) => (
        <button key={operator} className="operation" onClick={onOperationClick}>
          {operator}
        </button>
      ))}
      <button className="operation" onClick={onSummaryClick}>
        =
      </button>
    </div>
  );
};

export default Operations;
