import { MouseEventHandler } from 'react';
import { DIGITS } from '../../constants';

type Props = {
  digit: (typeof DIGITS)[number];
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Digit = ({ digit, onClick }: Props) => {
  return (
    <button className={'digit'} onClick={onClick} type={'button'}>
      {digit}
    </button>
  );
};
