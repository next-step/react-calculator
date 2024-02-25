import { PLUS, SUBTRACT, MULTIPLY, DIVIDE, OPERATORS_REGEX, INIT_OPERAND } from '@/constants'
import { ARITHMETIC_OPERATORS } from '@/constants'

type UnionFromTuple<T> = T extends ReadonlyArray<infer U> ? U : never
type Operator = UnionFromTuple<typeof ARITHMETIC_OPERATORS>

export default class Calculator {
  operands: number[]
  operators: Operator[]
  expressionCharactersArray: string[]

  constructor(input: string) {
    this.operands = []
    this.operators = []
    this.expressionCharactersArray = input.split('')
    this.parseExpression()
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

  parseExpression() {
    let operand = INIT_OPERAND
    for (const [index, character] of this.expressionCharactersArray.entries()) {
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
  sum(operand1: number, operand2: number) {
    return operand1 + operand2
  }

  subtract(operand1: number, operand2: number) {
    return operand1 - operand2
  }

  multiply(operand1: number, operand2: number) {
    return operand1 * operand2
  }
  divide(operand1: number, operand2: number) {
    return Math.floor(operand1 / operand2)
  }

  calculate() {
    const operatorMethodMap = {
      [PLUS]: this.sum,
      [SUBTRACT]: this.subtract,
      [MULTIPLY]: this.multiply,
      [DIVIDE]: this.divide,
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
