import React from "react";
import {OPERATIONS} from "../../constants/Operations";
import {OperatorionsType} from "../Calculator/Calculator";
import Operation from "../Operation/Operation";

interface OperationsProps {
  setOperation: (operations: OperatorionsType) => void;
}

export default function Operations({setOperation}: OperationsProps) {
  const operations: OperatorionsType[] = Object.values(OPERATIONS);
  return (
    <div className="operations subgrid">
      {operations.map((operation) => (
        <Operation
          operation={operation}
          clickOperation={() => setOperation(operation)}
        />
      ))}
    </div>
  );
}
