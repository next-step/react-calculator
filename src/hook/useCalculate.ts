import { calculrate, isNumberLengthValidate, isOperatorValidate } from "@/util";
import { useState } from "react";

const initialState = {
  prev: "",
  next: "",
  operator: "",
  display: "",
  computed: 0,
};

const useCalculate = () => {
  const [calculrateState, setCalculrateState] = useState(initialState);
  const { prev, next, operator, display, computed } = calculrateState;

  const handleOperation = (operation: string) => {
    if (isOperatorValidate(prev)) {
      setCalculrateState((prev) => ({
        ...prev,
        operator: operation,
        display: display + operation,
      }));
    }
  };

  const handleCalculate = () => {
    const computed = calculrate(prev, next, operator);
    setCalculrateState({ ...initialState, computed });
  };

  const handleDigit = (digit: number) => {
    if (computed) {
      setCalculrateState(initialState);
    }

    if (!operator && isNumberLengthValidate(prev)) {
      setCalculrateState((previous) => ({
        ...previous,
        prev: prev + digit,
        display: display + digit,
      }));
      return;
    }

    if (operator && isNumberLengthValidate(next)) {
      setCalculrateState((previous) => ({
        ...previous,
        next: next + digit,
        display: display + digit,
      }));
      return;
    }
  };

  const reset = () => {
    setCalculrateState(initialState);
  };

  return {
    calculrateState,
    handleCalculate,
    handleOperation,
    handleDigit,
    reset,
  };
};

export default useCalculate;
