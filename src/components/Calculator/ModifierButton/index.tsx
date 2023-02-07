import styles from "./index.module.css";

export default function ModifierButton() {
  return (
    <div className={`${styles.modifiers} subgrid`}>
      <button>AC</button>
    </div>
  );
}
