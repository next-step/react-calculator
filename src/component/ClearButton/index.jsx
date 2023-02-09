import React from "react";
import styles from "./index.module.css";

function ClearButton({ onClick }) {
  return (
    <button className={styles.modifier} onClick={onClick}>
      AC
    </button>
  );
}

export default ClearButton;
