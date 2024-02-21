import { CALCULATOR } from "data/constant";

import OperateButton from "components/OperateButton";

export default function OperatorButtons() {
  return (
    <div className="operations subgrid">
      {CALCULATOR.OPERATIONS.map((operation) => (
        <OperateButton key={operation} operate={operation} />
      ))}
    </div>
  );
}
