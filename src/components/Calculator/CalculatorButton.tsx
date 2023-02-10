import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { ERROR_RESULT } from '../../constants/calculator';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  result?: number;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const CalculatorButton = ({ type = 'button', result, className, children, ...props }: PropsWithChildren<Props>) => {
  return (
    <button {...props} type={type} disabled={result === ERROR_RESULT} className={className}>
      {children}
    </button>
  );
};

export default CalculatorButton;
