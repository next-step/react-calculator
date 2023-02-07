import styles from "./index.module.css";

const operators = ["/", "X", "-", "+", "="];

export default function OperatorButtons() {
  return (
    <div className={`${styles.operations} ${styles.subgrid}`}>
      {operators.map((operator) => (
        <button key={operator}>{operator}</button>
      ))}
    </div>
  );
}
