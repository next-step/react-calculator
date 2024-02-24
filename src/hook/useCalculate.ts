import { calculrate, isNumberLengthValidate, isOperatorValidate } from "@/util";
import { useState } from "react";

const initialState = {
  first: "",
  second: "",
  operator: "",
  display: "",
  computed: 0,
};

const useCalculate = () => {
  const [calculrateState, setCalculrateState] = useState(initialState);
  const { first, second, operator, display } = calculrateState;
  const handleDigit = (digit: number) => {
    if (!operator && isNumberLengthValidate(first)) {
      setCalculrateState({
        ...initialState,
        first: first + digit,
        display: display + digit,
      });
      return;
    }

    if (operator && isNumberLengthValidate(second)) {
      setCalculrateState((prev) => ({
        ...prev,
        second: second + digit,
        display: display + digit,
      }));
      return;
    }
  };
  const handleOperation = (operation: string) => {
    if (isOperatorValidate(first)) {
      setCalculrateState((prev) => ({
        ...prev,
        operator: operation,
        display: display + operation,
      }));
    }
  };
  const handleCalculate = () => {
    const computed = calculrate({ first, second, operator });
    setCalculrateState({ ...initialState, computed });
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
