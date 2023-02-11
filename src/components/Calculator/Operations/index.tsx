import React from "react";
import { useCalculator } from "../../../modules/context/Calculator/CalculatorContext";
import Operation, { OperationType } from "./Operation";

const operationList: OperationType[] = ["/", "X", "-", "+", "="];

const Operations = () => {
  const { addOperation } = useCalculator();

  const handleOperationClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    addOperation(e.currentTarget.value as OperationType);
  };

  return (
    <div className="operations subgrid">
      {operationList.map((operation) => {
        return (
          <Operation
            key={operation}
            operation={operation}
            onClick={handleOperationClick}
          />
        );
      })}
    </div>
  );
};

export default Operations;
