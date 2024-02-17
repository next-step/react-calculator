import React from "react";
import styles from "./Total.module.css";
import {ERROR_MESSAGE} from "../../constants//ErrorMessage";

interface TotalProps {
  total: number;
}

const Total = ({total}: TotalProps) => {
  const errors = [Infinity, -Infinity];
  return (
    <h1 id={styles.total}>
      {errors.includes(total) ? ERROR_MESSAGE.infinityError : total}
    </h1>
  );
};

export default Total;
