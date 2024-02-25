import { CALCULATOR } from "data/constant";

import OperatorButton from "components/operator/OperatorButton";

interface OperatorButtonsProps {
  onOperatorClick: (operator: string) => void;
}

export default function OperatorButtons({
  onOperatorClick,
}: OperatorButtonsProps) {
  return (
    <div className="operations subgrid">
      {CALCULATOR.OPERATOR.map((operator) => (
        <OperatorButton
          key={operator}
          operator={operator}
          onClick={(operator) => onOperatorClick(operator)}
        />
      ))}
    </div>
  );
}
