import {
  OPERATORS_REGEX,
  THREE_DIGIT_LIMIT_ERROR_MESSAGE,
  INPUT_NUMBER_FIRST_ERROR_MESSAGE,
  PLUS,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
} from '@/constants'

export default class Validator {
  expression: string

  constructor(expression: string) {
    this.expression = expression
    this.validateExpression()
  }

  isOnlyOperand(expression: string) {
    return !Number.isNaN(Number(expression))
  }

  isOnlyOperator(expression: string) {
    return (
      expression === PLUS ||
      expression == SUBTRACT ||
      expression === MULTIPLY ||
      expression === DIVIDE
    )
  }

  hasSuccessiveOperators(expression: string) {
    return expression
      .split(OPERATORS_REGEX)
      .some(
        (value, index, splitResult) => value === '' && index > 0 && splitResult[index - 1] === '',
      )
  }

  isInvalidNumberRange(value: number, maxDigit: number = 3) {
    const maxValue = Math.pow(10, maxDigit) - 1
    const minValue = -1 * maxValue
    return value < minValue || value > maxValue
  }

  isOperandsInvalid(expression: string) {
    const operands = expression
      .split(OPERATORS_REGEX)
      .filter(split => split !== '')
      .map(split => Number(split))
    return operands.some(operand => this.isInvalidNumberRange(operand))
  }

  validateExpression() {
    if (this.isOnlyOperator(this.expression)) throw new Error(INPUT_NUMBER_FIRST_ERROR_MESSAGE)

    if (this.hasSuccessiveOperators(this.expression))
      throw new Error(INPUT_NUMBER_FIRST_ERROR_MESSAGE)

    if (this.isOperandsInvalid(this.expression)) throw new Error(THREE_DIGIT_LIMIT_ERROR_MESSAGE)
    return true
  }
}
