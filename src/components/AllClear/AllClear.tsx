import React from "react";
import styles from "./AllClear.module.css";

interface AllClearProps {
  onClick: () => void;
}

export default function AllClear({onClick}: AllClearProps) {
  return (
    <button className={styles.modifier} onClick={onClick}>
      AC
    </button>
  );
}
