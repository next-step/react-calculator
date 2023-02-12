import React from "react";
import {OPERATIONS} from "../../constants/Calcurator";
import {OperatorionsType} from "../../models/Operations";
import Operation from "../Operation/Operation";

interface OperationsProps {
  onClick: (operator: OperatorionsType) => void;
}

const Operations = ({onClick}: OperationsProps) => {
  const operations: OperatorionsType[] = Object.values(OPERATIONS);
  return (
    <div className="operations subgrid">
      {operations.map((operation) => (
        <Operation
          operation={operation}
          clickOperation={onClick}
          key={operation}
        />
      ))}
    </div>
  );
};

export default Operations;
