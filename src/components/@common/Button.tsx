import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...attribute }: ButtonProps) => {
  return <button {...attribute}>{children}</button>;
};

export default Button;
