import DigitButtons from "./DigitButtons";
import styles from "./index.module.css";
import ModifierButton from "./ModifierButton";
import OperatorButtons from "./OperatorButtons";
import ResultPanel from "./ResultPanel";

export default function Calculator() {
  return (
    <div className={styles.calculator}>
      <ResultPanel />
      <ModifierButton />
      <DigitButtons />
      <OperatorButtons />
    </div>
  );
}
