import type { CalculatorArgs } from '@/components/Calculator/Calculator';

import { getCalculatorAction } from './calculatorAction';
import { CalculatorError } from './calculatorError';
import { CalculatorActionType } from './type';

export const initialState = '0';

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
        return String(state + String(input));
      case CalculatorActionType.ADD_OPERATOR:
        return String(state + action.payload);
      case CalculatorActionType.REPLACE_OPERATOR:
        return String(action.payload);
      case CalculatorActionType.OPERATE:
        return String(action.payload);
      case CalculatorActionType.CLEAR:
        return initialState;
      default:
        throw new Error('Unexpected Calculator Action');
    }
  } catch (error) {
    if (error instanceof CalculatorError) {
      alert(error.message);
    }
    return state;
  }
};
