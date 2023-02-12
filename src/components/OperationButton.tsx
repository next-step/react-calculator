import React from 'react';
import { Operation } from '../constants';

type OperationButtonProps = {
  operation: Operation;
  onClick: (operation: Operation) => void;
};

function OperationButton({ operation, onClick }: OperationButtonProps) {
  const handleClick = () => {
    onClick(operation);
  };

  return (
    <button className="operation" onClick={handleClick}>
      {operation}
    </button>
  );
}

export default React.memo(OperationButton);
