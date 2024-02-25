import { useCalculatorDispatch } from '../hooks/useCalculatorContext';
import { CONST } from '../utils/const';

export default function Operations() {
  const dispatch = useCalculatorDispatch();

  return (
    <div className="operations subgrid">
      {CONST.OPERATION_LIST.map((operation) => (
        <button
          key={operation}
          className="operation"
          name={operation}
          onClick={() => dispatch({ type: 'operation', param: operation })}
        >
          {operation}
        </button>
      ))}
    </div>
  );
}
