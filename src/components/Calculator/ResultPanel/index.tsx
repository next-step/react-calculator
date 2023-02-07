import styles from "./index.module.css";

interface ResultPanelPropsType {
  calculateQueue: string;
}

export default function ResultPanel({ calculateQueue }: ResultPanelPropsType) {
  return (
    <h1 id={styles.total}>{calculateQueue === "" ? "0" : calculateQueue}</h1>
  );
}
