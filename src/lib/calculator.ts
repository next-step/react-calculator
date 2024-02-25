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

  constructor(expression: string) {
    this.operands = []
    this.operators = []
    this.parseExpression(expression)
  }

  isOperand(input: string) {
    return !OPERATORS_REGEX.test(input)
  }

  isNonOperatorNegative(character: string, index: number) {
    return index === 0 && character === '-'
  }

  addOperand(operand: string) {
    this.operands.push(Number(operand))
  }

  parseExpression(expression: string) {
    let operand = INIT_OPERAND
    for (const [index, character] of expression.split('').entries()) {
      if (this.isOperand(character) || this.isNonOperatorNegative(character, index)) {
        operand += character
      } else {
        this.operators.push(character as Operator)
        if (operand.length > 0) {
          this.addOperand(operand)
          operand = INIT_OPERAND
        }
      }
    }
    if (operand) {
      this.addOperand(operand)
    }
  }

  calculate() {
    const operatorMethodMap = {
      [PLUS]: Calculator.sum,
      [SUBTRACT]: Calculator.subtract,
      [MULTIPLY]: Calculator.multiply,
      [DIVIDE]: Calculator.divide,
    } as const

    while (this.operands.length >= 2 && this.operators.length > 0) {
      const operand1 = this.operands.shift() as number
      const operand2 = this.operands.shift() as number
      const operatorMethod = operatorMethodMap[this.operators.shift() as Operator]
      const result = operatorMethod(operand1, operand2)
      this.operands.unshift(result)
    }

    return this.operands[0]
  }
}
