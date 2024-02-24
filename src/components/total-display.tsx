import { PropsWithChildren } from "react";
import styles from "./total-display.module.css";

export const TotalDisplay = ({ children }: PropsWithChildren) => {
  return <h1 className={styles.total}>{children}</h1>;
};
