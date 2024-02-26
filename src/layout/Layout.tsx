import { ContainerProps } from '../types/components';

export const Layout = ({ children }: ContainerProps) => {
  return (
    <div id='app'>
      <div className='calculator'>{children}</div>
    </div>
  );
};
