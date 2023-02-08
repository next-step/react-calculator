import React from 'react';
import Operation, { OperationType } from './Operation';

const index = () => {
  const operationList: OperationType[] = ['/', 'X', '-', '+', '='];

  return (
    <div className="operations subgrid">
      {operationList.map((operation) => {
        return <Operation operation={operation} />;
      })}
    </div>
  );
};

export default index;
