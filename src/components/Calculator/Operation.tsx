import React from 'react';

interface OperationProps {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}
export const Operation = ({ handleClick }: OperationProps) => {
  const operation = ['/', 'X', '-', '+', '='];

  return (
    <div className="operations subgrid">
      {operation.map((opeartion) => (
        <button value={opeartion} key={opeartion} onClick={handleClick}>
          {opeartion}
        </button>
      ))}
    </div>
  );
};
export default Operation;
