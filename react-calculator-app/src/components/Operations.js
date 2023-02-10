import '../css/operations.css';
import { useCalculator } from '../store/CalcContext';

const Operations = () => {
  const { addOperator, calculate } = useCalculator();
  return (
    <div className="operations subgrid">
      {operators.map((operator) => (
        <button key={operator} onClick={() => addOperator(operator)}>
          {operator}
        </button>
      ))}
      <button key={'='} onClick={calculate}>
        =
      </button>
    </div>
  );
};

export default Operations;

const operators = ['+', '-', 'X', '/'];
