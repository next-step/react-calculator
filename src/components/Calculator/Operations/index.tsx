import React from 'react';
import Operation, { OperationType } from './Operation';

const index = () => {
  const operationList: OperationType[] = ['/', 'X', '-', '+', '='];

  const handleOperationClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value);
  };

  return (
    <div className="operations subgrid">
      {operationList.map((operation) => {
        return (
          <Operation
            key={operation}
            operation={operation}
            onClick={handleOperationClick}
          />
        );
      })}
    </div>
  );
};

export default index;
