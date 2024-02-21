import { ContainerProps } from '../types/common';

export const Layout = ({ children }: ContainerProps) => {
  return (
    <div id='app'>
      <div className='calculator'>{children}</div>
    </div>
  );
};
