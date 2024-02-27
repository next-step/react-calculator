import { ComponentPropsWithoutRef, forwardRef } from "react";
import styles from "./button.module.css";

const ButtonClassMap = {
  modifier: styles.modifier,
  operation: styles.operation,
  digit: styles.digit,
};

type ButtonProps = {
  variant: keyof typeof ButtonClassMap;
};

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps & ComponentPropsWithoutRef<"button">
>(({ variant, ...props }, ref) => {
  const className = `${styles.button} ${ButtonClassMap[variant]}`;
  return <button ref={ref} className={className} {...props} />;
});

Button.displayName = "Button";
