import {
  CALCULATE_OPERATOR,
  CalculateOperators,
  EQUAL_OPERATOR,
} from "@/util/constants";

import styles from "./index.module.css";

interface OperatorButtonsProps {
  onClickCalculateButton(value: CalculateOperators): void;
  onClickResultButton(): void;
}

export default function OperatorButtons({
  onClickCalculateButton,
  onClickResultButton,
}: OperatorButtonsProps) {
  return (
    <div className={`${styles.operations} subgrid`}>
      {CALCULATE_OPERATOR.map((operator) => (
        <button key={operator} onClick={() => onClickCalculateButton(operator)}>
          {operator}
        </button>
      ))}
      <button onClick={onClickResultButton}>{EQUAL_OPERATOR}</button>
    </div>
  );
}
