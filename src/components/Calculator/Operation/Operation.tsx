import './operation.css';

const OPERATORS = ['/', 'X', '+', '-'] as const;
const EQUAL = '=' as const;

const Operation = ({
  appendOperator,
  calculate,
}: {
  appendOperator: (operation: string) => void;
  calculate: () => void;
}) => {
  return (
    <div className="operations subgrid">
      {OPERATORS.map((operation) => (
        <button
          key={operation}
          className="operation"
          onClick={() => appendOperator(operation)}
        >
          {operation}
        </button>
      ))}
      <button className="operation" onClick={calculate}>
        {EQUAL}
      </button>
    </div>
  );
};

export default Operation;
