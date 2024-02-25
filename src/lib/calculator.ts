import {
  PLUS,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
  OPERATORS_REGEX,
  INIT_OPERAND,
  PLUS_INFINITY,
  MINUSE_INFINITY,
} from '@/constants'
import { ARITHMETIC_OPERATORS } from '@/constants'

type UnionFromTuple<T> = T extends ReadonlyArray<infer U> ? U : never
type Operator = UnionFromTuple<typeof ARITHMETIC_OPERATORS>

export default class Calculator {
  operator: Operator | null
  leftOperand: number | null
  rightOperand: number | null

  operands: number[]
  operators: Operator[]

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

  constructor(expression: string) {
    this.operator = null
    this.leftOperand = null
    this.rightOperand = null

    this.operands = []
    this.operators = []
    this.parseExpression(expression)
  }

  isOperand(input: string, index: number) {
    return !OPERATORS_REGEX.test(input) || (index === 0 && input === '-')
  }

  parseExpression(expression: string) {
    let operandStr = INIT_OPERAND
    for (const [index, character] of expression.split('').entries()) {
      if (this.isOperand(character, index)) {
        operandStr += character
      } else {
        this.operator = character as Operator
        if (operandStr.length > 0) {
          this.leftOperand = Number(operandStr)
          operandStr = INIT_OPERAND
        }
      }
    }
    if (operandStr) {
      this.rightOperand = Number(operandStr)
    }
  }

  calculate() {
    if (this.leftOperand === null || this.rightOperand === null || this.operator === null)
      return this.leftOperand

    const operatorMethod = Calculator.operatorMethodMap[this.operator]
    return operatorMethod(this.leftOperand, this.rightOperand)
  }
}
