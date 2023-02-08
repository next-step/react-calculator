import { OPERATORS, OperatorTypes } from "@/util/constants";

import styles from "./index.module.css";

interface OperatorButtonsPropsType {
  onClickOperator(value: OperatorTypes): void;
}

export default function OperatorButtons({
  onClickOperator,
}: OperatorButtonsPropsType) {
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
