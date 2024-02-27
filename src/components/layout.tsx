import { PropsWithChildren } from "react";
import styles from "./layout.module.css";

const LayoutMain = ({ children }: PropsWithChildren) => {
  return <div className={styles.calculator}>{children}</div>;
};

const LayoutDigits = ({ children }: PropsWithChildren) => {
  return <div className={styles.digits}>{children}</div>;
};

const LayoutModifiers = ({ children }: PropsWithChildren) => {
  return (
    <div className={`${styles.modifiers} ${styles.subgrid}`}>{children}</div>
  );
};

const LayoutOperations = ({ children }: PropsWithChildren) => {
  return (
    <div className={`${styles.operations} ${styles.subgrid}`}>{children}</div>
  );
};

export const Layout = Object.assign(LayoutMain, {
  Digits: LayoutDigits,
  Modifiers: LayoutModifiers,
  Operations: LayoutOperations,
});
