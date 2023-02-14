import {
  DIVIDE,
  ERROR,
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
  total: string | number;
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

function getTotal(state: DefaultValueState): number | string {
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
    return total;
  }
  throw new Error('잘못된 값이 입력됐습니다');
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
          total: 0,
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
        try {
          const total = getTotal(state);

          return {
            ...defaultValue,
            total,
          };
        } catch (e) {
          if (e instanceof Error) {
            alert(e.message);
          }
          return {
            ...defaultValue,
            total: ERROR,
          };
        }
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
