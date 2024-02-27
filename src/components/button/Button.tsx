import { FC, ReactNode } from "react";
import { ButtonVariantEnum } from "./Button.enum.ts";

interface Props {
  children: ReactNode;
  variant: ButtonVariantEnum;
  onClick?: () => void;
}

const Button: FC<Props> = ({ children, variant, onClick }) => {

  return (
    <button className={variant} onClick={() => onClick && onClick()}>
      {children}
    </button>
  );
};

export default Button;