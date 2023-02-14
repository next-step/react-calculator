import { operations } from "../../utils/constants";
import { OperationType } from "../../utils/types";

interface OperationsProps {
  operationHandler: (operation: OperationType) => void;
}

const Operation = (props: OperationsProps) => {
  const { operationHandler } = props;
  return (
    <div className="operations subgrid">
      {operations.map((operation) => (
        <button
          key={operation}
          className="operation"
          onClick={() => operationHandler(operation)}
        >
          {operation}
        </button>
      ))}
    </div>
  );
};

export default Operation;
