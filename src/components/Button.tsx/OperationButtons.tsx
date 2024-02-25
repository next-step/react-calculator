import { OPERATORS } from '../../common/constants';
import { OperatorType } from '../../common/types';
import { ButtonBase } from './ButtonBase';

interface OperationButtonsProps {
  onClick: (operator: OperatorType) => void;
}

export default function OperationButtons({ onClick }: OperationButtonsProps) {
  return (
    <div className="operations subgrid">
      {OPERATORS.map(operator => (
        <ButtonBase
          key={operator}
          className="operation"
          label={operator}
          onClick={() => onClick(operator)}
        />
      ))}
    </div>
  );
}
