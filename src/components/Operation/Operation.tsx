import React from "react";

interface OperationProps {
  operation: string;
  clickOperation: () => void;
}

const Operation = ({operation, clickOperation}: OperationProps) => {
  return (
    <button className="operation" onClick={clickOperation}>
      {operation}
    </button>
  );
};

export default Operation;
