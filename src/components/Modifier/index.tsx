import { MouseEventHandler } from 'react';

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Modifier = ({ onClick }: Props) => {
  return (
    <button className={'modifier'} onClick={onClick} type={'button'}>
      AC
    </button>
  );
};
