import { MouseEventHandler } from 'react';
import { DIGITS } from '../../constants';

type Props = {
  num: (typeof DIGITS)[number];
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Digit = ({ num, onClick }: Props) => {
  return (
    <button className={'digit'} onClick={onClick} type={'button'}>
      {num}
    </button>
  );
};
