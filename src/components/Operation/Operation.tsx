import React from "react";
import {OperatorionsType} from "../../models/Operations";
import styles from "./Operation.module.css";

interface OperationProps {
  operation: OperatorionsType;
  clickOperation: (operations: OperatorionsType) => void;
}

const Operation = ({operation, clickOperation}: OperationProps) => {
  return (
    <button
      className={styles.operation}
      onClick={() => clickOperation(operation)}
    >
      {operation}
    </button>
  );
};

export default Operation;
