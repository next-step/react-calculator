import { MouseEvent } from 'react';

const operations = ['/', 'X', '-', '+', '='] as const;

type OperationsProps = {
  handleOperations: (e: MouseEvent<HTMLDivElement>) => void;
};

function Operations({ handleOperations }: OperationsProps) {
  return (
    <div className="operations subgrid" onClick={handleOperations}>
      {operations.map(operation => (
        <button key={operation} className="operation" name={operation} value={operation}>
          {operation}
        </button>
      ))}
    </div>
  );
}

export default Operations;
