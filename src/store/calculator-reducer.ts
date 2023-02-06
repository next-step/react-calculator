import type { Operator } from '@/constants/operation';

export const initialState = { userInput: '0' };

type CalculatorActionType =
  | { type: 'ADD_NUMBER'; nextNumber: number }
  | { type: 'REPLACE_NUMBER'; nextNumber: number }
  | { type: 'ADD_OPERATION'; nextOperation: Operator }
  | {
      type: 'REPLACE_OPERATION';
      prevOperation: Operator;
      nextOperation: Operator;
    }
  | { type: 'CALCULATE'; result: number }
  | { type: 'RESET' };

export const calculatorReducer = (
  state: typeof initialState,
  action: CalculatorActionType
) => {
  switch (action.type) {
    case 'ADD_NUMBER':
      return { userInput: state.userInput + String(action.nextNumber) };
    case 'REPLACE_NUMBER':
      return { userInput: String(action.nextNumber) };
    case 'ADD_OPERATION':
      return { userInput: state.userInput + action.nextOperation };
    case 'REPLACE_OPERATION':
      return {
        userInput: state.userInput.replace(
          action.prevOperation,
          action.nextOperation
        ),
      };
    case 'CALCULATE':
      return { userInput: String(action.result) };
    case 'RESET':
      return initialState;
    default:
      throw new Error('Unhandled Calculator action type');
  }
};
