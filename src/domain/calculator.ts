import { ERROR_MESSAGE, OPERAND_MAX_LENGTH, OPERATORS } from '../constants/calculator';
import { InitialOperator, Operator } from '../types/calculator';
import { validate, validator } from '../utils/validation';

type Calculate = {
  operand1: number;
  operand2: number;
  operator: Operator | InitialOperator;
};

export const calculate = ({ operand1, operand2, operator }: Calculate) => {
  console.log(operand1, operand2, operator);
  if (operator === OPERATORS.PLUS) {
    return operand1 + operand2;
  }
  if (operator === OPERATORS.MINUS) {
    return operand1 - operand2;
  }
  if (operator === OPERATORS.MULTIPLY) {
    return operand1 * operand2;
  }
  if (operator === OPERATORS.DIVIDE) {
    return Math.trunc(operand1 / operand2);
  }

  return 0;
};

export const validateOperand = (operand: number) => {
  validate(validator.lte(operand, OPERAND_MAX_LENGTH), ERROR_MESSAGE.CALCULATOR.INVALID_OPERAND_LENGTH);
};
