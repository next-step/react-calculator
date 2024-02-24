import { MouseEvent } from 'react';
import { Operators } from '../../../constants';

interface Props {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function Operations({ onClick }: Props) {
  return (
    <div className='operations subgrid'>
      {Object.values(Operators).map((operator) => (
        <button key={operator} className='opration' onClick={onClick}>
          {operator}
        </button>
      ))}
    </div>
  );
}
