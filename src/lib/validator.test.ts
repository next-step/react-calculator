import { THREE_DIGIT_LIMIT_ERROR_MESSAGE, INPUT_NUMBER_FIRST_ERROR_MESSAGE } from '@/constants'
import Validator from './validator'

describe('checkValidInput 검증', () => {
  test('숫자만 있는 문자열이지만 그 숫자가 유효한 범위의 숫자가 아니면 THREE_DIGIT_LIMIT_ERROR_MESSAGE가 난다', () => {
    expect(() => new Validator('1234').validateExpression()).toThrowError(
      THREE_DIGIT_LIMIT_ERROR_MESSAGE,
    )
  })

  test('연산자만 존재하는 문자열이면 INPUT_NUMBER_FIRST_ERROR_MESSAGE가 난다', () => {
    expect(() => new Validator('+').validateExpression()).toThrowError(
      INPUT_NUMBER_FIRST_ERROR_MESSAGE,
    )
  })

  test('연산자가 연속해서 나타나는 표현식은 INPUT_NUMBER_FIRST_ERROR_MESSAGE가 난다', () => {
    expect(() => new Validator('45+-').validateExpression()).toThrowError(
      INPUT_NUMBER_FIRST_ERROR_MESSAGE,
    )
  })

  test('음수가 입력될때 유효한 범위가 아니면 THREE_DIGIT_LIMIT_ERROR_MESSAGE가 난다', () => {
    expect(() => new Validator('-9999').validateExpression()).toThrowError(
      THREE_DIGIT_LIMIT_ERROR_MESSAGE,
    )
  })

  test('두번째 이상의 피연산자에 유효하지 않은 범위의 숫자가 붙으면 THREE_DIGIT_LIMIT_ERROR_MESSAGE가 발생한다', () => {
    expect(() => new Validator('88*8888').validateExpression()).toThrowError(
      THREE_DIGIT_LIMIT_ERROR_MESSAGE,
    )
  })

  test('유효한 경우 예외 테스트 1', () => {
    expect(new Validator('-12+12').validateExpression()).toBe(true)
    expect(new Validator('12/12').validateExpression()).toBe(true)
  })
  test('유효한 경우 예외 테스트 2', () => {
    expect(new Validator('12-').validateExpression()).toBe(true)
    expect(new Validator('12+').validateExpression()).toBe(true)
  })
  test('유효한 경우 예외 테스트 3', () => {
    expect(new Validator('-5').validateExpression()).toBe(true)
    expect(new Validator('9').validateExpression()).toBe(true)
  })
  test('유효한 경우 예외 테스트 4', () => {
    expect(new Validator('5+9/2').validateExpression()).toBe(true)
  })
})
