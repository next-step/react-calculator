import { HTMLAttributes, PropsWithChildren } from 'react';

import styles from './CalculatorDisplay.module.css';

type DisplayProps = PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>;

export const CalculatorDisplay = ({ children, className, ...props }: DisplayProps) => {
  const displayClassName = `${styles.display} ${className || ''}`.trim();
  return (
    <h1 className={displayClassName} {...props}>
      {children}
    </h1>
  );
};
