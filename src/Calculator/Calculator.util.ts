import { Operator } from './Calculator.type'

type CalculateFunction = (leftOperand: number, rightOperand: number) => number

const CALCULATE_FUNCTION_MAP: {
  '+': CalculateFunction
  '-': CalculateFunction
  '/': CalculateFunction
  X: CalculateFunction
} = {
  '+': (leftOperand: number, rightOperand: number) =>
    leftOperand + rightOperand,
  '-': (leftOperand: number, rightOperand: number) =>
    leftOperand - rightOperand,
  '/': (leftOperand: number, rightOperand: number) =>
    Math.floor(leftOperand / rightOperand),
  X: (leftOperand: number, rightOperand: number) => leftOperand * rightOperand,
}

export const calculate = ({
  leftOperand,
  operator,
  rightOperand,
}: {
  leftOperand: number
  operator: Operator | ''
  rightOperand: number
}) => {
  if (operator === '' || operator === '=') {
    return 0
  }

  return CALCULATE_FUNCTION_MAP[operator](leftOperand, rightOperand)
}
