import type { CalculatorArgs } from '@/components/Calculator/Calculator';

import { getCalculatorAction } from './calculatorAction';
import { CalculatorActionType } from './type';

const initialState = '0';

export const calculatorMachine = (
  state = initialState,
  input: CalculatorArgs
): string => {
  try {
    const action = getCalculatorAction(state, input);
    switch (action.type) {
      case CalculatorActionType.ADD_NUMBER:
        return state + String(input);
      case CalculatorActionType.REPLACE_NUMBER:
        return state + String(input);
      case CalculatorActionType.ADD_OPERATOR:
        return state + action.payload;
      case CalculatorActionType.REPLACE_OPERATOR:
        return state + action.payload;
      case CalculatorActionType.OPERATE:
        return String(action.payload);
      case CalculatorActionType.CLEAR:
        return initialState;
      default:
        throw new Error('Unexpected Calculator Action');
    }
  } catch (error) {
    console.error(error);
    return '오류';
  }
};
