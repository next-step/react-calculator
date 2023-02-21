import React from 'react'
import OperationButton from './OperationButton';

const operations = ['/', 'X', '-', '+', '='] as const;

function OperationBoard() {
  return (
    <div className="operations subgrid">
      {operations.map((operation) => 
        <OperationButton
          operation={operation}
        />
      )}
    </div>

  )
}

export default OperationBoard;