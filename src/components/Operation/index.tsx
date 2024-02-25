import { MouseEventHandler } from 'react';
import { OPERATION_SIGN } from '../../constants';

type Props = {
  operation: (typeof OPERATION_SIGN)[keyof typeof OPERATION_SIGN];
  currOperation: (typeof OPERATION_SIGN)[keyof typeof OPERATION_SIGN] | null;
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
