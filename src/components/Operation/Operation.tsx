import React from "react";

interface OperationProps {
  operation: string;
  clickOperation: () => void;
}

export default function Operation({operation, clickOperation}: OperationProps) {
  return (
    <button className="operation" onClick={clickOperation}>
      {operation}
    </button>
  );
}
