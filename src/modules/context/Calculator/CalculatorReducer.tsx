import { OperationType } from "../../../components/Calculator/Operations/Operation";
import {
  ActionType,
  ADD_DIGIT,
  ADD_OPERATION,
  CLEAR_ALL,
} from "./CalculatorActionType";

export interface DefaultValueState {
  total: number;
  digits: number;
  operation: "ac" | OperationType | null;
}

export const defaultValue: DefaultValueState = {
  total: 0,
  digits: 0,
  operation: null,
};

function CalculatorReducer(
  state: DefaultValueState = defaultValue,
  action: ActionType
): DefaultValueState {
  switch (action.type) {
    case ADD_DIGIT: {
      return {
        ...state,
        digits: state.digits + action.digit,
      };
    }
    case ADD_OPERATION: {
      return {
        ...state,
        operation: action.operation,
      };
    }
    case CLEAR_ALL: {
      return defaultValue;
    }
  }
}

export default CalculatorReducer;
