import { ERROR_MESSAGE, OPERAND_MAX_LENGTH, OPERATORS } from '../constants/calculator';
import { CalculatorState } from '../types/calculator';
import { validate } from '../utils/validation';

export const calculate = ({ result, operand, operator }: CalculatorState) => {
  if (operand === null || operator === null) return result;

  const calculateResult = {
    [OPERATORS.PLUS]: result + operand,
    [OPERATORS.MINUS]: result - operand,
    [OPERATORS.MULTIPLY]: result * operand,
    [OPERATORS.DIVIDE]: Math.trunc(result / operand),
    [OPERATORS.EQUAL]: result,
  }[operator];

  return calculateResult;
};

export const validateOperand = (operand: number) => {
  validate(String(operand).length <= OPERAND_MAX_LENGTH, ERROR_MESSAGE.CALCULATOR.INVALID_OPERAND_LENGTH);
};
