import { Operator } from './Calculator.type'

export const calculate = ({
  leftOperand,
  operator,
  rightOperand,
}: {
  leftOperand: number
  operator: Operator | ''
  rightOperand: number
}) => {
  switch (operator) {
    case '+':
      return leftOperand + rightOperand
    case '-':
      return leftOperand - rightOperand
    case '/':
      return Math.floor(leftOperand / rightOperand)
    case 'X':
      return leftOperand * rightOperand
    default:
      return 0
  }
}
