import React from 'react';

export type OperationType = '/' | 'X' | '-' | '+' | '=';

interface OperationProps {
  operation: OperationType;
}

const Operation = ({ operation }: OperationProps) => {
  return <button className="operation">{operation}</button>;
};

export default Operation;
