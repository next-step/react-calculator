import styles from "./index.module.css";

interface ResultPanelProps {
  resultPanel: string;
}

export default function ResultPanel({ resultPanel }: ResultPanelProps) {
  return <h1 id={styles.total}>{resultPanel === "" ? "0" : resultPanel}</h1>;
}
