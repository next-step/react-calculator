import { Operation } from '../Constants/Operation';
import OperationButton from './OperationButton';

interface OpreationBoardProps {
  setOperation(operation: string): void;
  onClickEqual(operatin: string): void;
}

const operations = Array.from(Operation.values());

function OperationBoard({ setOperation, onClickEqual }: OpreationBoardProps) {
  return (
    <div className="operations subgrid">
      {operations.map((operation) => {
        if (operation === '=') {
          return <OperationButton
            operation={operation}
            setOperation={onClickEqual}
          />
        }

        return <OperationButton
          operation={operation}
          setOperation={setOperation}
        />
      } 
    )}
    </div>

  )
}

export default OperationBoard;