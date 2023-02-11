import './operation.css';

export const ADD = '+';
export const SUBTRACT = '-';
export const MULTIPLY = 'X';
export const DIVIDE = '/';
const EQUAL = '=';

const OPERATORS = [ADD, SUBTRACT, MULTIPLY, DIVIDE] as const;
export type Operators = (typeof OPERATORS)[number];

export type Subtract = '-';

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
