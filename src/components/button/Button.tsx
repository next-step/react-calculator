import { HTMLAttributes, PropsWithChildren } from 'react';

import styles from './Button.module.css';

export type ButtonColorScheme = 'basic' | 'accent' | 'light';

type ButtonProps = PropsWithChildren<HTMLAttributes<HTMLButtonElement>> & {
  colorScheme?: ButtonColorScheme;
};

export const Button = ({ children, colorScheme, className = '', ...props }: ButtonProps) => {
  const buttonClassName = `${styles.button} ${styles[colorScheme || 'basic']} ${className}`.trim();
  return (
    <button type="button" className={buttonClassName} {...props}>
      {children}
    </button>
  );
};
