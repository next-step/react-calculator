import { EQUAL, OPERATIONS } from "@/constant";

interface OperationProps {
  handleOperation: (operation: string) => void;
  handleCalculate: () => void;
}
const Operation = ({ handleOperation, handleCalculate }: OperationProps) => {
  return (
    <div className="operations subgrid">
      {Object.values(OPERATIONS).map((operation) => (
        <button
          key={operation}
          className="operation"
          onClick={() => handleOperation(operation)}
        >
          {operation}
        </button>
      ))}
      <button className="operation" onClick={() => handleCalculate()}>
        {EQUAL}
      </button>
    </div>
  );
};

export default Operation;
