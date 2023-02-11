import { OperationType } from "../../../components/Calculator/Operations/Operation";
import {
  ActionType,
  ADD_FIRST_DIGIT,
  ADD_OPERATION,
  ADD_SECOND_DIGIT,
  RESET,
} from "./CalculatorActionType";

export interface DefaultValueState {
  total: string;
  firstDigits: string;
  secondDigits: string;
  operation: OperationType | undefined;
}

export const defaultValue: DefaultValueState = {
  total: "",
  firstDigits: "0",
  secondDigits: "0",
  operation: undefined,
};

function getTotal(state: DefaultValueState): string {
  let total = 0;
  const firstNum = Number(state.firstDigits);
  const secondNum = Number(state.secondDigits);

  switch (state.operation) {
    case "+":
      total = firstNum + secondNum;
      break;
    case "-":
      total = firstNum - secondNum;
      break;
    case "X":
      total = firstNum * secondNum;
      break;
    case "/":
      total = Math.floor(firstNum / secondNum);
      break;
  }
  if (Number.isFinite(total)) {
    return total.toString();
  }
  return "ERROR";
}

function CalculatorReducer(
  state: DefaultValueState = defaultValue,
  action: ActionType
): DefaultValueState {
  switch (action.type) {
    case ADD_FIRST_DIGIT: {
      if (state.firstDigits === "0") {
        return {
          ...state,
          total: "",
          firstDigits: action.digit,
        };
      }
      return {
        ...state,
        firstDigits: state.firstDigits + action.digit,
      };
    }
    case ADD_SECOND_DIGIT: {
      if (state.secondDigits === "0") {
        return {
          ...state,
          secondDigits: action.digit,
        };
      }
      return {
        ...state,
        secondDigits: state.secondDigits + action.digit,
      };
    }
    case ADD_OPERATION: {
      if (action.operation === "=") {
        return {
          ...defaultValue,
          total: getTotal(state),
        };
      }
      return {
        ...state,
        operation: action.operation,
      };
    }
    case RESET: {
      return defaultValue;
    }
  }
}

export default CalculatorReducer;
