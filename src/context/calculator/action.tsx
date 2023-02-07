import { Modifier, Operator } from '../../types/calculator';

export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const MULTIPLY = 'MULTIPLY';
export const DIVIDE = 'DIVIDE';
export const EQUAL = 'EQUAL';
export const AC = 'AC';
export const OPERAND = 'OPERAND';

type Add = typeof ADD;
type Sub = typeof SUBTRACT;
type Multiply = typeof MULTIPLY;
type Divide = typeof DIVIDE;
type Equal = typeof EQUAL;
type Ac = typeof AC;
type Operand = typeof OPERAND;

export type OperatorActions = Add | Sub | Multiply | Divide | Equal;
export type OperandActions = Operand;
export type ModifierActions = Ac;

export type Action = {
  type: OperatorActions | OperandActions | ModifierActions;
  payload: number | Operator | Modifier;
};
