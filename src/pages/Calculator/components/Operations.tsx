import { MouseEvent } from 'react';
import { OPERATORS } from '../../../constants';

interface Props {
  handleOperator: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function Operations({ handleOperator }: Props) {
  return (
    <div className='operations subgrid'>
      {Object.values(OPERATORS).map((operator) => (
        <button key={operator} className='opration' onClick={handleOperator}>
          {operator}
        </button>
      ))}
    </div>
  );
}
