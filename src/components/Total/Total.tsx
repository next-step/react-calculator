import React from "react";
import styles from "./Total.module.css";

interface TotalProps {
  total: number;
}

export default function Total({total}: TotalProps) {
  return <h1 id={styles.total}>{total}</h1>;
}
