import React from "react";
import {OperatorionsType} from "../../models/Operations";

interface OperationProps {
  operation: OperatorionsType;
  clickOperation: (operations: OperatorionsType) => void;
}

const Operation = ({operation, clickOperation}: OperationProps) => {
  return (
    <button className="operation" onClick={() => clickOperation(operation)}>
      {operation}
    </button>
  );
};

export default Operation;
