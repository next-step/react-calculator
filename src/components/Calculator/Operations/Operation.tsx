import React from 'react';
import { OperationType } from '../../../types/calculator';

interface OperationProps {
  operation: OperationType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Operation = ({ operation, onClick }: OperationProps) => {
  return (
    <button
      type="button"
      className="operation"
      onClick={onClick}
      value={operation}
    >
      {operation}
    </button>
  );
};

export default Operation;
