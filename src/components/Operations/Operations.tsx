import React from "react";
import {OPERATIONS} from "../../constants/Operations";
import {OperatorionsType} from "../Calculator/Calculator";
import Operation from "../Operation/Operation";

interface OperationsProps {
  onClick: (operations: OperatorionsType) => void;
}

const Operations = ({onClick}: OperationsProps) => {
  const operations: OperatorionsType[] = Object.values(OPERATIONS);
  return (
    <div className="operations subgrid">
      {operations.map((operation) => (
        <Operation
          operation={operation}
          clickOperation={() => onClick(operation)}
          key={operation}
        />
      ))}
    </div>
  );
};

export default Operations;
