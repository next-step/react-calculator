import { OPERATORS } from '@/constants';
import type { OperatorType } from '@/types';

const sum = (num1: number, num2: number) => num1 + num2;
const subtract = (num1: number, num2: number) => num1 - num2;
const multiply = (num1: number, num2: number) => num1 * num2;
const divide = (num1: number, num2: number) => Math.floor(num1 / num2);

const OPERATOR_ACTIONS = {
  sum,
  subtract,
  multiply,
  divide,
};

const calculate = (numbers: number[], operator: OperatorType) => {
  const [num1, num2] = numbers;
  const operateAction = OPERATORS.find((op) => op.label === operator)?.action;
  if (!operateAction) {
    console.error('Invalid operator');
    return 0;
  }
  return OPERATOR_ACTIONS[operateAction](num1, num2);
};
export default calculate;
