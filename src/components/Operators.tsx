import { OPERATORS } from '@/constants/calculator';

export type Operator = '/' | 'X' | '+' | '-';

type Props = {
  handleOperatorClick: (operator: Operator) => void;
  calculateResult: () => void;
};

export default function Operators({
  handleOperatorClick,
  calculateResult,
}: Props) {
  return (
    <div className="operations subgrid">
      {OPERATORS.map((operator) => (
        <button key={operator} onClick={() => handleOperatorClick(operator)}>
          {operator}
        </button>
      ))}
      <button onClick={calculateResult}>=</button>
    </div>
  );
}
