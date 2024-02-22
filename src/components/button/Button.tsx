import { FC, ReactNode } from "react";
import { ButtonVariantType } from "./Button.type";

interface Props {
  children: ReactNode;
  variant: ButtonVariantType;
}

const Button: FC<Props> = ({ children, variant }) => {
  return <button className={variant}>{children}</button>;
};

export default Button;
