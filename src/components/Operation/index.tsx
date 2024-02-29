import { MouseEventHandler } from 'react';
import { OperationTypes } from '../../types/operation';

type Props = {
  operation: OperationTypes;
  currOperation: OperationTypes | null;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Operation = ({ operation, onClick, currOperation }: Props) => {
  return (
    <button
      className={`operation ${currOperation === operation ? 'curr-operation' : ''}`}
      onClick={onClick}
      type={'button'}
    >
      {operation}
    </button>
  );
};
