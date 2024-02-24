import { CALCULATOR } from "data/constant";

import OperateButton from "components/operator/OperateButton";

interface OperatorButtonsProps {
  onOperatorClick: (operator: string) => void;
}

export default function OperatorButtons({
  onOperatorClick,
}: OperatorButtonsProps) {
  return (
    <div className="operations subgrid">
      {CALCULATOR.OPERATIONS.map((operation) => (
        <OperateButton
          key={operation}
          operate={operation}
          onOperatorClick={(operation) => onOperatorClick(operation)}
        />
      ))}
    </div>
  );
}
