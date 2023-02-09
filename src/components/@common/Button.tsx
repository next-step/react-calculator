import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...attributes }: PropsWithChildren<Props>) => {
  return <button {...attributes}>{children}</button>;
};

export default Button;
