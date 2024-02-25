import {
  PLUS,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
  OPERATORS_REGEX,
  PLUS_INFINITY,
  MINUSE_INFINITY,
  INPUT_NUMBER_FIRST_ERROR_MESSAGE,
} from '@/constants'
import { ARITHMETIC_OPERATORS } from '@/constants'
import Validator from '@/lib/validator'

type UnionFromTuple<T> = T extends ReadonlyArray<infer U> ? U : never
type Operator = UnionFromTuple<typeof ARITHMETIC_OPERATORS>

export default class Calculator {
  operator: Operator | null
  leftOperand: number
  rightOperand: number | null

  static isInfinity(expression: string) {
    return expression === PLUS_INFINITY || expression === MINUSE_INFINITY
  }
  static sum(operand1: number, operand2: number) {
    return operand1 + operand2
  }
  static subtract(operand1: number, operand2: number) {
    return operand1 - operand2
  }
  static multiply(operand1: number, operand2: number) {
    return operand1 * operand2
  }
  static divide(operand1: number, operand2: number) {
    return Math.floor(operand1 / operand2)
  }

  static operatorMethodMap = {
    [PLUS]: this.sum,
    [SUBTRACT]: this.subtract,
    [MULTIPLY]: this.multiply,
    [DIVIDE]: this.divide,
  }

  constructor() {
    this.operator = null
    this.leftOperand = 0
    this.rightOperand = null
  }

  validateOperand(operand: number) {
    return new Validator(String(operand)).validateExpression()
  }

  updateOperand(input: number) {
    if (!this.operator) {
      const newLeftOperand = Number(
        String(this.leftOperand === 0 ? '' : this.leftOperand) + String(input),
      )
      this.validateOperand(newLeftOperand)
      return (this.leftOperand = newLeftOperand)
    }
    const newRightOperand = Number(String(this.rightOperand ?? '') + String(input))
    this.validateOperand(newRightOperand)
    this.rightOperand = newRightOperand
  }

  updateOperator(input: Operator) {
    if (this.leftOperand === 0 || this.operator) throw new Error(INPUT_NUMBER_FIRST_ERROR_MESSAGE)
    this.operator = input
  }

  getExpression() {
    let result = String(this.leftOperand)

    if (this.operator !== null) {
      result += this.operator
    }
    if (this.rightOperand !== null) {
      result += String(this.rightOperand)
    }

    return result
  }

  isOperand(input: string, index: number) {
    return !OPERATORS_REGEX.test(input) || (index === 0 && input === '-')
  }

  clear(leftOperand: number = 0) {
    this.leftOperand = leftOperand
    this.operator = null
    this.rightOperand = null
  }

  calculate() {
    if (this.leftOperand === null || this.rightOperand === null || this.operator === null)
      return this.leftOperand

    const operatorMethod = Calculator.operatorMethodMap[this.operator]
    const result = operatorMethod(this.leftOperand, this.rightOperand)

    this.clear(result)

    return result
  }
}
