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
  splitsByOperators: string[]

  constructor(expression: string) {
    this.expression = expression
    this.splitsByOperators = expression.split(OPERATORS_REGEX)
    this.validateExpression()
  }

  isOnlyNumber() {
    return !Number.isNaN(Number(this.expression))
  }

  hasSuccessiveOperators() {
    return this.expression
      .split(OPERATORS_REGEX)
      .some(
        (value, index, splitResult) => value === '' && index > 0 && splitResult[index - 1] === '',
      )
  }

  isWithinMaxDigits(value: number, maxDigit: number = 3) {
    const maxValue = Math.pow(10, maxDigit) - 1
    const minValue = -1 * maxValue
    return minValue <= value && value <= maxValue
  }

  isInvalidNumberRange(num: number) {
    return !this.isWithinMaxDigits(num)
  }

  isSingleNegativeNumber() {
    return this.expression[0] === SUBTRACT && this.splitsByOperators.length === 2
  }

  getOperands() {
    return this.splitsByOperators.filter(split => split !== '').map(split => Number(split))
  }

  isOperandsInvalid() {
    return this.getOperands().some(operand => this.isInvalidNumberRange(operand))
  }

  validateExpression() {
    if (this.isOnlyNumber()) {
      if (this.isInvalidNumberRange(Number(this.expression))) {
        throw new Error(THREE_DIGIT_LIMIT_ERROR_MESSAGE)
      }
    } else {
      if (
        this.expression === PLUS ||
        this.expression == SUBTRACT ||
        this.expression === MULTIPLY ||
        this.expression === DIVIDE
      ) {
        throw new Error(INPUT_NUMBER_FIRST_ERROR_MESSAGE)
      } else if (this.hasSuccessiveOperators()) {
        throw new Error(INPUT_NUMBER_FIRST_ERROR_MESSAGE)
      } else if (
        this.isSingleNegativeNumber() &&
        this.isInvalidNumberRange(Number(this.expression))
      ) {
        throw new Error(THREE_DIGIT_LIMIT_ERROR_MESSAGE)
      } else if (this.isOperandsInvalid()) {
        throw new Error(THREE_DIGIT_LIMIT_ERROR_MESSAGE)
      }
    }
    return true
  }
}
