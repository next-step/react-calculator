import styles from "./index.module.css";

interface ResultPanelProps {
  calculateQueue: string;
}

export default function ResultPanel({ calculateQueue }: ResultPanelProps) {
  return (
    <h1 id={styles.total}>{calculateQueue === "" ? "0" : calculateQueue}</h1>
  );
}
