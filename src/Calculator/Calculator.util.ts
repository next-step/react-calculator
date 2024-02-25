import { Operation } from './Calculator.type'

export const calculate = ({
  leftOperand,
  operation,
  rightOperand,
}: {
  leftOperand: number
  operation: Operation | ''
  rightOperand: number
}) => {
  switch (operation) {
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
