import OperationButton from './OperationButton';

interface OpreationBoardProps {
  setOperation(operation: string): void;
}

const operations = ['/', 'X', '-', '+', '='] as const;

function OperationBoard({ setOperation }: OpreationBoardProps) {
  return (
    <div className="operations subgrid">
      {operations.map((operation) => 
        <OperationButton
          operation={operation}
          setOperation={setOperation}
        />
      )}
    </div>

  )
}

export default OperationBoard;