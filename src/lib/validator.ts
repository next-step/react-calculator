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
    return OPERATORS_REGEX.test(this.expression) === false
  }

  hasSuccessiveOperators() {
    return this.expression
      .split(OPERATORS_REGEX)
      .some(
        (value, index, splitResult) => value === '' && index > 0 && splitResult[index - 1] === '',
      )
  }

  isInvalidNumberRange() {
    const parsedNumber = parseInt(this.expression)
    return parsedNumber < -999 || parsedNumber > 999
  }

  isSingleNegativeNumber() {
    return this.expression[0] === SUBTRACT && this.splitsByOperators.length === 2
  }

  validateExpression() {
    if (this.isOnlyNumber()) {
      if (this.isInvalidNumberRange()) {
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
      } else if (this.isSingleNegativeNumber() && this.isInvalidNumberRange()) {
        throw new Error(THREE_DIGIT_LIMIT_ERROR_MESSAGE)
      }
    }
    return true
  }
}
