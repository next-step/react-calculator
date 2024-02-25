import { OPERATORS } from '@/constants';
import type { OperatorType } from '@/types';

type OperationsProps = {
  handleClickOperator: (action: OperatorType) => void;
  handleClickCalculate: () => void;
};

const Operations = ({
  handleClickOperator,
  handleClickCalculate,
}: OperationsProps) => {
  return (
    <div className='operations subgrid'>
      {OPERATORS.map((operator) => (
        <button
          key={operator.action}
          className='operation'
          onClick={() => handleClickOperator(operator.label)}
        >
          {operator.label}
        </button>
      ))}
      <button className='operation' onClick={handleClickCalculate}>
        =
      </button>
    </div>
  );
};

export default Operations;
