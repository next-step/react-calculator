export type OperationType = '+' | '-' | 'X' | '/' | '=';
export type OperatorType = '+' | '-' | 'X' | '/';
const OPERATOR_NAME_INFO = {
  ADD: '+',
  SUB: '-',
  MUL: 'X',
  DIV: '/',
};
const OPERATOR_FUNCTION = {
  ADD: (num1: number, num2: number) => Math.floor(num1 + num2),
  SUB: (num1: number, num2: number) => Math.floor(num1 - num2),
  MUL: (num1: number, num2: number) => Math.floor(num1 * num2),
  DIV: (num1: number, num2: number) => Math.floor(num1 / num2),
};

const OPERATOR_FUNCTION_INFO = {
  '+': OPERATOR_FUNCTION.ADD,
  '-': OPERATOR_FUNCTION.SUB,
  X: OPERATOR_FUNCTION.MUL,
  '/': OPERATOR_FUNCTION.DIV,
};

const OPERATORS = [OPERATOR_NAME_INFO.ADD, OPERATOR_NAME_INFO.SUB, OPERATOR_NAME_INFO.MUL, OPERATOR_NAME_INFO.DIV];
export const isOperator = (value: OperationType): value is OperatorType => {
  return OPERATORS.includes(value);
};

const caculateNumber = (operator: OperatorType, number1: number, number2: number): number => {
  return OPERATOR_FUNCTION_INFO[operator](number1, number2);
};

export const caculationResult = (operator: OperatorType | null, number1: number, number2: number) => {
  if (operator === null) return '오류';
  const result = caculateNumber(operator, number1, number2);
  return !isFinite(result) ? '오류' : result.toString();
};

export const getCurrentDigits = (prevNumber: number, currentNumber: string): string => {
  return parseInt(prevNumber + currentNumber).toString();
};
