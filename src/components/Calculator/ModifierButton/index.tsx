import { RESULT_BUTTON } from "@/util/constants";

import styles from "./index.module.css";

interface ModifierButtonProps {
  onClickModifier(): void;
}

export default function ModifierButton({
  onClickModifier,
}: ModifierButtonProps) {
  return (
    <div className={`${styles.modifiers} subgrid`}>
      <button onClick={onClickModifier}>{RESULT_BUTTON}</button>
    </div>
  );
}
