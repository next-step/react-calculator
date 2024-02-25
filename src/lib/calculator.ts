import {
  PLUS,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
  OPERATORS_REGEX,
  PLUS_INFINITY,
  MINUSE_INFINITY,
  INPUT_NUMBER_FIRST_ERROR_MESSAGE,
  MAX_DIGITS,
  THREE_DIGIT_LIMIT_ERROR_MESSAGE,
} from '@/constants'
import { ARITHMETIC_OPERATORS } from '@/constants'

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

  static validateOperand(operand: number, maxDigit: number = MAX_DIGITS) {
    const maxValue = Math.pow(10, maxDigit) - 1
    const minValue = -1 * maxValue

    if (operand > maxValue || operand < minValue) throw new Error(THREE_DIGIT_LIMIT_ERROR_MESSAGE)
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

  updateOperand(input: number) {
    if (!this.operator) {
      const newLeftOperand = Number(
        String(this.leftOperand === 0 ? '' : this.leftOperand) + String(input),
      )
      Calculator.validateOperand(newLeftOperand)
      return (this.leftOperand = newLeftOperand)
    }
    const newRightOperand = Number(String(this.rightOperand ?? '') + String(input))
    Calculator.validateOperand(newRightOperand)
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
