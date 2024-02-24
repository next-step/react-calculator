import { THREE_DIGIT_LIMIT_ERROR_MESSAGE, INPUT_NUMBER_FIRST_ERROR_MESSAGE } from '@/constants'
import Validator from './validator'

describe('checkValidInput 검증', () => {
  test('숫자만 있는 문자열이지만 그 숫자가 유효한 범위의 숫자가 아니면 THREE_DIGIT_LIMIT_ERROR_MESSAGE가 난다', () => {
    try {
      new Validator('1234').validateExpression()
    } catch (error) {
      expect((error as Error)?.message).toBe(THREE_DIGIT_LIMIT_ERROR_MESSAGE)
    }
  })

  test('연산자만 존재하는 문자열이면 INPUT_NUMBER_FIRST_ERROR_MESSAGE가 난다', () => {
    try {
      new Validator('+').validateExpression()
    } catch (error) {
      expect((error as Error)?.message).toBe(INPUT_NUMBER_FIRST_ERROR_MESSAGE)
    }
  })

  test('연산자가 연속해서 나타나는 표현식은 INPUT_NUMBER_FIRST_ERROR_MESSAGE가 난다', () => {
    try {
      new Validator('45+-').validateExpression()
    } catch (error) {
      expect((error as Error)?.message).toBe(INPUT_NUMBER_FIRST_ERROR_MESSAGE)
    }
  })

  test('음수가 입력될때 유효한 범위가 아니면 THREE_DIGIT_LIMIT_ERROR_MESSAGE가 난다', () => {
    try {
      new Validator('-9999').validateExpression()
    } catch (error) {
      expect((error as Error)?.message).toBe(THREE_DIGIT_LIMIT_ERROR_MESSAGE)
    }
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
