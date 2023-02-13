import {
  DIVIDE,
  EROOR,
  MINUS,
  MULTIPLY,
  PLUS,
} from '../../../constants/calculator';
import { OperationType } from '../../../types/calculator';
import {
  ActionType,
  ADD_FIRST_DIGIT,
  ADD_OPERATION,
  ADD_SECOND_DIGIT,
  RESET,
} from './CalculatorActionType';

export interface DefaultValueState {
  total: string;
  firstDigits: string;
  secondDigits: string;
  operation: OperationType | undefined;
}

export const defaultValue: DefaultValueState = {
  total: '',
  firstDigits: '0',
  secondDigits: '0',
  operation: undefined,
};

function getTotal(state: DefaultValueState): string {
  const { firstDigits, secondDigits, operation } = state;

  let total = 0;
  const firstNum = Number(firstDigits);
  const secondNum = Number(secondDigits);

  switch (operation) {
    case PLUS:
      total = firstNum + secondNum;
      break;
    case MINUS:
      total = firstNum - secondNum;
      break;
    case MULTIPLY:
      total = firstNum * secondNum;
      break;
    case DIVIDE:
      total = Math.floor(firstNum / secondNum);
      break;
  }
  if (Number.isFinite(total)) {
    return total.toString();
  }
  return EROOR;
}

function CalculatorReducer(
  state: DefaultValueState = defaultValue,
  action: ActionType
): DefaultValueState {
  switch (action.type) {
    case ADD_FIRST_DIGIT: {
      if (state.firstDigits === '0') {
        return {
          ...state,
          total: '',
          firstDigits: action.digit,
        };
      }
      return {
        ...state,
        firstDigits: state.firstDigits + action.digit,
      };
    }
    case ADD_SECOND_DIGIT: {
      if (state.secondDigits === '0') {
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
      if (action.operation === '=') {
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
