import { OPERATORS } from '@/constants';
import type { OperatorType } from '@/types';

type OperationsProps = {
  onClickOperator: (action: OperatorType) => void;
  onClickCalculate: () => void;
};

const Operations = ({ onClickOperator, onClickCalculate }: OperationsProps) => {
  return (
    <div className='operations subgrid'>
      {OPERATORS.map((operator) => (
        <button
          key={operator.action}
          className='operation'
          onClick={() => onClickOperator(operator.label)}
        >
          {operator.label}
        </button>
      ))}
      <button className='operation' onClick={onClickCalculate}>
        =
      </button>
    </div>
  );
};

export default Operations;
