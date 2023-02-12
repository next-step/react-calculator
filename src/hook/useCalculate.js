import { useRef, useState } from "react";
import { calculate, splitTotal } from "../util";

const useCalculate = () => {
  const [total, setTotal] = useState("0");
  const digitRef = useRef([]);
  const operatorRef = useRef(null);

  const enterDigit = (digit) => {
    if (total === "0") {
      setTotal(digit);
    } else {
      setTotal((total) => String(total) + digit);
    }
  };

  const enterOperator = (operator) => {
    setTotal((total) => total + operator);
    operatorRef.current = operator;
  };

  const calculateTotal = () => {
    digitRef.current = splitTotal(total, operatorRef.current);
    setTotal(calculate(...digitRef.current, operatorRef.current));
  };

  const clear = () => {
    setTotal("0");
  };

  return {
    total,
    enterDigit,
    enterOperator,
    calculateTotal,
    clear,
  };
};

export default useCalculate;
