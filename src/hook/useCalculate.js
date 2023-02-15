import { useEffect, useRef, useState } from "react";
import { calculate, splitTotal } from "../util";

const useCalculate = () => {
  const [total, setTotal] = useState("0");
  const digitRef = useRef([]);
  const operatorRef = useRef(null);
  const [isActive, setIsActive] = useState(true);

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
    setIsActive(false);
    digitRef.current = splitTotal(total, operatorRef.current);
    const result = calculate(...digitRef.current, operatorRef.current);
    if (result === Infinity) setTotal("오류");
    else setTotal(Math.floor(result));
  };

  const clear = () => {
    setTotal("0");
    operatorRef.current = null;
    setIsActive(true);
  };

  const checkDigit = () => {
    if (operatorRef.current) {
      if (splitTotal(total, operatorRef.current)[1].length > 3) {
        alert("숫자는 세 자리까지만 입력 가능합니다!");
        setTotal(total.slice(0, total.length - 1));
      }
    } else {
      if (total.length > 3) {
        alert("숫자는 세 자리까지만 입력 가능합니다!");
        setTotal(total.slice(0, total.length - 1));
      }
    }
  };

  useEffect(() => {
    if (isActive) {
      checkDigit();
    }
  }, [total, isActive]);

  return {
    total,
    enterDigit,
    enterOperator,
    calculateTotal,
    clear,
  };
};

export default useCalculate;
