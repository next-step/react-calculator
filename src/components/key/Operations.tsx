import { OPERATORS } from '../../common/constants';
import { OperatorType } from '../../common/types';
import { KeyButton } from './KeyButton';

interface OperationsProps {
  onClick: (operator: OperatorType) => void;
}

export default function Operations({ onClick }: OperationsProps) {
  return (
    <div className="operations subgrid">
      {OPERATORS.map(operator => (
        <KeyButton
          key={operator}
          className="operation"
          label={operator}
          onClick={() => onClick(operator)}
        />
      ))}
    </div>
  );
}
