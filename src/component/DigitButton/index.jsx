import React from "react";
import styles from "./index.module.css";

function DigitButton({ children }) {
  return <button className={styles.digit}>{children}</button>;
}

export default DigitButton;
