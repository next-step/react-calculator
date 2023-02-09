import styles from "./index.module.css";

interface ModifierButtonProps {
  onClickModifier(value: string): void;
}

export default function ModifierButton({
  onClickModifier,
}: ModifierButtonProps) {
  return (
    <div className={`${styles.modifiers} subgrid`}>
      <button onClick={() => onClickModifier("AC")}>AC</button>
    </div>
  );
}
