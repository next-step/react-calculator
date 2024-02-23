type Operator = '+' | '-' | '*' | '/'

export default class Calculator {
  static INIT_OPERAND = ''
  static OPERATOR_REGEX = /[+\-*/]/

  operands: number[]
  operators: Operator[]
  expressionArr: string[]

  constructor(input: string) {
    this.operands = []
    this.operators = []
    this.expressionArr = input.split('')
    this.readExpression()
  }

  isOperand(input: string) {
    return !Calculator.OPERATOR_REGEX.test(input)
  }

  isNonOperatorNegative(character: string, index: number) {
    return index === 0 && character === '-'
  }

  addOperand(operand: string) {
    this.operands.push(Number(operand))
  }

  readExpression() {
    let operand = Calculator.INIT_OPERAND
    for (const [index, character] of this.expressionArr.entries()) {
      if (this.isOperand(character) || this.isNonOperatorNegative(character, index)) {
        operand += character
      } else {
        this.operators.push(character as Operator)
        if (operand.length > 0) {
          this.addOperand(operand)
          operand = Calculator.INIT_OPERAND
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
    const operatorMap = {
      '+': this.sum,
      '-': this.subtract,
      '*': this.multiply,
      '/': this.divide,
    }

    while (this.operands.length >= 2 && this.operators.length > 0) {
      const operand1 = this.operands.shift() as number
      const operand2 = this.operands.shift() as number
      const operatorMethod = operatorMap[this.operators.shift() as Operator]
      const result = operatorMethod(operand1, operand2)
      this.operands.unshift(result)
    }

    return this.operands[0]
  }
}
