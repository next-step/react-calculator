import type { Operator } from '@/constants/operation';

export const initialState = { userInput: '0' };

type CalculatorActionType =
  | { type: 'ADD_NUMBER'; payload: number }
  | { type: 'REPLACE_NUMBER'; payload: number }
  | { type: 'ADD_OPERATION'; payload: Operator }
  | {
      type: 'REPLACE_OPERATION';
      payload: { prevOperation: Operator; nextOperation: Operator };
    }
  | { type: 'CALCULATE'; payload: number }
  | { type: 'RESET' };

export const calculatorReducer = (
  state: typeof initialState,
  action: CalculatorActionType
) => {
  switch (action.type) {
    case 'ADD_NUMBER':
      return { userInput: state.userInput + String(action.payload) };
    case 'REPLACE_NUMBER':
      return { userInput: String(action.payload) };
    case 'ADD_OPERATION':
      return { userInput: state.userInput + action.payload };
    case 'REPLACE_OPERATION':
      return {
        userInput: state.userInput.replace(
          action.payload.nextOperation,
          action.payload.nextOperation
        ),
      };
    case 'CALCULATE':
      return { userInput: String(action.payload) };
    case 'RESET':
      return initialState;
    default:
      throw new Error('Unhandled Calculator action type');
  }
};
