import { useState } from "react";
import { MouseEvent } from "react";
import { operand } from "../utils/Operand";
import { VALIDATE_MESSAGE } from "../constants";

const NUMBER_MAX_LENGTH = 2;

const initialState = {
  targetNumber: "",
  prevNumber: "",
  operator: "",
};

const initialError = {
  isError: false,
  msg: "",
};

type CalculateError = { isError: boolean; msg: string };

function useCalculator() {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState<CalculateError>(initialError);

  const handleDigits = (e: MouseEvent<HTMLDivElement>) => {
    const { value } = e.target as HTMLButtonElement;

    if (!state.targetNumber && value === "0") {
      return;
    }

    if (state.targetNumber.length > NUMBER_MAX_LENGTH) {
      window.alert(VALIDATE_MESSAGE.NUMBER_MAX_LENGTH);
      return;
    }

    setState((prev) => ({
      ...prev,
      targetNumber: prev.targetNumber + value,
    }));
  };

  const handleOperations = (e: MouseEvent<HTMLDivElement>) => {
    const { value } = e.target as HTMLButtonElement;

    if (value === "=") {
      const result = operand(state);

      if (!isFinite(result)) {
        setError({
          isError: true,
          msg: VALIDATE_MESSAGE.NUMBER_INFINITY,
        });
      }

      setState({
        targetNumber: result.toString(),
        prevNumber: "",
        operator: "",
      });

      return;
    }

    if (state.operator || !state.targetNumber) {
      window.alert(VALIDATE_MESSAGE.ENTER_NUMBER_BEFORE_OPERATOR);
      return;
    }

    setState((prev) => ({
      operator: value,
      prevNumber: prev.targetNumber,
      targetNumber: "",
    }));
  };

  const getTotal = () => {
    const { targetNumber, operator, prevNumber } = state;

    return error.isError
      ? error.msg
      : `${prevNumber}${operator}${targetNumber}`;
  };

  const handleModifier = () => {
    setState(initialState);
    setError(initialError);
  };

  return {
    state,
    handleDigits,
    handleOperations,
    handleModifier,
    total: getTotal(),
    error,
  };
}

export default useCalculator;
