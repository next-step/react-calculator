import { OPERATORS } from '../../constants';

export type OperationState = {
  operator: ArithmeticOperators | null;
  operand1: number;
  operand2: number | null;
};

export type ArithmeticOperators = Exclude<OPERATORS, OPERATORS.EQUALS>;
