import { MouseEventHandler } from 'react';
import { OPERATION_SIGN } from '../../constants';

type Props = {
  operation: (typeof OPERATION_SIGN)[keyof typeof OPERATION_SIGN];
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Operation = ({ operation, onClick }: Props) => {
  return (
    <button className={'operation'} onClick={onClick} type={'button'}>
      {operation}
    </button>
  );
};
