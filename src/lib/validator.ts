import {
  OPERATORS_REGEX,
  THREE_DIGIT_LIMIT_ERROR_MESSAGE,
  INPUT_NUMBER_FIRST_ERROR_MESSAGE,
} from '@/constants'

const isOnlyNumber = (input: string) => !OPERATORS_REGEX.test(input)

const isSuccessiveOperators = (input: string) => {
  const splitResult = input.split(OPERATORS_REGEX)
  return splitResult.some(
    (value, index) => value === '' && index > 0 && splitResult[index - 1] === '',
  )
}

const isInvalidNumberRange = (input: string) => {
  return parseInt(input) < -999 || parseInt(input) > 999
}

const isSingleNegativeNumber = (input: string) => {
  return input[0] === '-' && input.split(OPERATORS_REGEX).length === 2
}

export const checkValidInput = (input: string) => {
  if (isOnlyNumber(input)) {
    if (isInvalidNumberRange(input)) {
      throw new Error(THREE_DIGIT_LIMIT_ERROR_MESSAGE)
    }
  } else {
    if (input === '-' || input === '+' || input === '*' || input === '/') {
      throw new Error(INPUT_NUMBER_FIRST_ERROR_MESSAGE)
    } else if (isSuccessiveOperators(input)) {
      throw new Error(INPUT_NUMBER_FIRST_ERROR_MESSAGE)
    } else if (isSingleNegativeNumber(input) && isInvalidNumberRange(input)) {
      throw new Error(THREE_DIGIT_LIMIT_ERROR_MESSAGE)
    }
  }
  return true
}
