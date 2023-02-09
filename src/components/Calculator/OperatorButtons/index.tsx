import { OPERATORS, OperatorTypes } from "@/util/constants";

import styles from "./index.module.css";

interface OperatorButtonsProps {
  onClickOperator(value: OperatorTypes): void;
}

export default function OperatorButtons({
  onClickOperator,
}: OperatorButtonsProps) {
  return (
    <div className={`${styles.operations} subgrid`}>
      {OPERATORS.map((operator) => (
        <button key={operator} onClick={() => onClickOperator(operator)}>
          {operator}
        </button>
      ))}
    </div>
  );
}
