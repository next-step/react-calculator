import React from "react";
import styles from "./Total.module.css";

interface TotalProps {
  total: number;
}

export default function Total({total}: TotalProps) {
  const errors = [Infinity, -Infinity];
  return <h1 id={styles.total}>{errors.includes(total) ? "오류" : total}</h1>;
}
