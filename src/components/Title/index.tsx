import { HTMLAttributes, createElement } from "react";
import styles from "./index.module.css";

interface Title extends HTMLAttributes<HTMLHeadingElement> {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function Title({ as, ...rest }: Title) {
  return createElement(as, { className: styles.total, ...rest });
}
