import { OperationType } from '../../../types/calculator';

export const ADD_FIRST_DIGIT = 'ADD_FIRST_DIGIT';
type FIRST_DIGIT = { type: typeof ADD_FIRST_DIGIT; digit: string };

export const ADD_SECOND_DIGIT = 'ADD_SECOND_DIGIT';
type SECOND_DIGIT = { type: typeof ADD_SECOND_DIGIT; digit: string };

export const ADD_OPERATION = 'ADD_OPERATION';
type OPERATION = {
  type: typeof ADD_OPERATION;
  operation: OperationType;
};

export const RESET = 'RESET';
type CLEAR_ALL = { type: typeof RESET };

export type ActionType = FIRST_DIGIT | SECOND_DIGIT | OPERATION | CLEAR_ALL;
