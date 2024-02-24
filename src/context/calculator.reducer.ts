import { CALCULATOR } from "data/constant";
import {
  digitInputHandler,
  equalOperatorInputHandler,
  operatorInputHandler,
} from "utils/inputHandlers";

export interface CalculatorState {
  firstOperand: string;
  secondOperand: string;
  operator: string;
  display: string;
}

export interface CalculatorAction {
  type: string;
  payload?: {
    value?: string;
    operator?: string;
  };
}

export const initialCalculatorState: CalculatorState = {
  firstOperand: "",
  secondOperand: "",
  operator: "",
  display: "0",
};

export const CALCULATOR_ACTIONS = {
  CLEAR: "CLEAR",
  INPUT_DIGIT: "DIGIT",
  OPERATOR: "OPERATOR",
  EQUAL: "EQUAL",
};

export const calculatorReducer = (
  state: CalculatorState,
  action: CalculatorAction
): CalculatorState => {
  switch (action.type) {
    case CALCULATOR_ACTIONS.CLEAR:
      return initialCalculatorState;

    case CALCULATOR_ACTIONS.INPUT_DIGIT: {
      if (!action.payload?.value) {
        return state;
      }

      if (state.display === CALCULATOR.ERROR) {
        return {
          ...initialCalculatorState,
          firstOperand: action.payload.value,
          display: action.payload.value,
        };
      }

      return digitInputHandler(state, action.payload.value);
    }

    case CALCULATOR_ACTIONS.OPERATOR:
      if (!action.payload?.operator) {
        return state;
      }

      if (state.display === CALCULATOR.ERROR) {
        return state;
      }

      if (action.payload.operator === "=") {
        return equalOperatorInputHandler(state);
      } else {
        return operatorInputHandler(state, action.payload.operator);
      }

    default: {
      return {
        ...state,
      };
    }
  }
};
