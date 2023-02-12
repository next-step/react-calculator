import React from "react";
import {OperatorionsType} from "../Calculator/Calculator";
import Operation from "../Operation/Operation";

interface OperationsProps {
  setOperation: (operations: OperatorionsType) => void;
}

export default function Operations({setOperation}: OperationsProps) {
  const operations: OperatorionsType[] = ["/", "*", "-", "+", "="];
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
