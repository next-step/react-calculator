import styles from "./index.module.css";

interface ModifierButtonPropsType {
  onClickModifier(value: string): void;
}

export default function ModifierButton({
  onClickModifier,
}: ModifierButtonPropsType) {
  return (
    <div className={`${styles.modifiers} subgrid`}>
      <button onClick={() => onClickModifier("AC")}>AC</button>
    </div>
  );
}
