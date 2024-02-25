import { MouseEventHandler } from 'react';
import { OPERATION_SIGN } from '../../constants';

type Props = {
  sign: (typeof OPERATION_SIGN)[keyof typeof OPERATION_SIGN];
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Operation = ({ sign, onClick }: Props) => {
  return (
    <button className={'operation'} onClick={onClick} type={'button'}>
      {sign}
    </button>
  );
};
