import React, { createContext, useContext, useReducer } from "react";
import { OperationType } from "../../../components/Calculator/Operations/Operation";
import { ADD_DIGIT, ADD_OPERATION } from "./CalculatorActionType";
import CalculatorReducer, {
  defaultValue,
  DefaultValueState,
} from "./CalculatorReducer";

interface ContextProps {
  readonly calculator: DefaultValueState;
  addDigit: (digit: number) => void;
  addOperation: (operation: OperationType | "ac") => void;
}

export const CalculatorContext = createContext<ContextProps>({
  calculator: defaultValue,
  addDigit: () => {},
  addOperation: () => {},
});

export const CalculatorProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(CalculatorReducer, defaultValue);

  const addDigit = (number: number): void => {
    dispatch({ type: ADD_DIGIT, digit: number });
  };

  const addOperation = (operation: OperationType | "ac"): void => {
    dispatch({ type: ADD_OPERATION, operation });
  };

  return (
    <CalculatorContext.Provider
      value={{ calculator: state, addDigit, addOperation }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = () => useContext(CalculatorContext);
