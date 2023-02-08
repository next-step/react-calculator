import './operation.css';

type Add = '+';
export type Subtract = '-';
type Multiply = 'X';
type Divide = '/';
type Equal = '=';

export type Operators = Add | Subtract | Multiply | Divide;

export const OPERATORS: ReadonlyArray<Operators> = ['/', 'X', '-', '+'];

const EQUAL: Equal = '=';

const Operation = ({
  appendOperator,
  calculate,
}: {
  appendOperator: (operation: Operators) => void;
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
