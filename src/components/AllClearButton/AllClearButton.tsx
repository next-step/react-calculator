import React from "react";
import styles from "./AllClearButton.module.css";

interface AllClearProps {
  onClick: () => void;
}

const AllClearButton = ({onClick}: AllClearProps) => {
  return (
    <button className={styles.modifier} onClick={onClick}>
      AC
    </button>
  );
};

export default AllClearButton;
