import { ReactNode } from "react";

import styles from "./index.module.css";

export default function DigitButton({ children }: { children: ReactNode }) {
  return <button className={styles.digit}>{children}</button>;
}
