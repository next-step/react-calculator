import { HTMLAttributes, PropsWithChildren } from 'react';
import styles from './Button.module.css';

type ButtonProps = PropsWithChildren<HTMLAttributes<HTMLButtonElement>> & {
  colorScheme?: 'digit' | 'operation' | 'modifier';
};

export const Button = ({ children, colorScheme, ...props }: ButtonProps) => {
  const buttonClassName = `${styles.button} ${styles[colorScheme || 'digit']}`;
  return (
    <button type="button" className={buttonClassName} {...props}>
      {children}
    </button>
  );
};
