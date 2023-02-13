import { useState } from "react";
import { floorToString } from "../utils/floorToString";
import { OperationType } from "../utils/types";

const MAX_INPUT_LENGTH = 3;

const useCalculate = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [resultNumber, setResultNumber] = useState(0);
  const [operation, setOperation] = useState<OperationType>();
  const [done, setDone] = useState(false);

  const state = {
    firstNumber,
    secondNumber,
    resultNumber,
    operation,
    done,
  };

  const firstNumberHandler = (num: number) => {
    if (firstNumber.length >= MAX_INPUT_LENGTH) return;
    setFirstNumber((prevValue) => prevValue + num);
  };
  const secondNumberHandler = (num: number) => {
    if (secondNumber.length >= MAX_INPUT_LENGTH) return;
    setSecondNumber((prevValue) => prevValue + num);
  };

  const numHandler = (num: number) => {
    if (!operation) return firstNumberHandler(num);
    secondNumberHandler(num);
  };

  const getResultValue = () => {
    if (!isFinite(resultNumber)) return "오류";
    if (done) return floorToString(resultNumber);
    if (secondNumber) return secondNumber;
    if (firstNumber) return firstNumber;
    return "0";
  };

  const operationHandler = (oper: OperationType) => {
    if (done) {
      setFirstNumber(floorToString(resultNumber));
      setOperation(oper);
      setDone(false);
      return;
    }
    const num1 = parseInt(firstNumber);
    const num2 = parseInt(secondNumber);
    if (!num1) return;
    if (oper === "=") {
      if (num1 && num2) {
        switch (operation) {
          case "+":
            setResultNumber(num1 + num2);
            break;
          case "-":
            setResultNumber(num1 - num2);
            break;
          case "X":
            setResultNumber(num1 * num2);
            break;
          case "/":
            setResultNumber(num1 / num2);
            break;
        }
        setDone(true);
        setOperation(undefined);
        setFirstNumber("");
        setSecondNumber("");
        return;
      }
    }
    setOperation(oper);
  };

  const allClear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation(undefined);
    setResultNumber(0);
    setDone(false);
  };
  return {
    state,
    numHandler,
    getResultValue,
    operationHandler,
    allClear,
  };
};

export default useCalculate;
