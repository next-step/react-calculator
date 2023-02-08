import type { CombineElementProps } from 'types';

type ButtonProps = CombineElementProps<'button'>;

function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}

export default Button;
