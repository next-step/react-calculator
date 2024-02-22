import { checkValidInput, THREE_DIGIT_LIMIT_ERROR, INPUT_NUMBER_FIRST_ERROR } from './validator'

describe('checkValidInput 검증', () => {
  test('숫자만 있는 문자열이지만 그 숫자가 유효한 범위의 숫자가 아니면 THREE_DIGIT_LIMIT_ERROR가 난다', () => {
    try {
      checkValidInput('1234')
    } catch (error) {
      expect((error as Error)?.message).toBe(THREE_DIGIT_LIMIT_ERROR)
    }
  })

  test('연산자만 존재하는 문자열이면 INPUT_NUMBER_FIRST_ERROR가 난다', () => {
    try {
      checkValidInput('+')
    } catch (error) {
      expect((error as Error)?.message).toBe(INPUT_NUMBER_FIRST_ERROR)
    }
  })

  test('연산자가 연속해서 나타나는 표현식은 INPUT_NUMBER_FIRST_ERROR가 난다', () => {
    try {
      checkValidInput('45+-')
    } catch (error) {
      expect((error as Error)?.message).toBe(INPUT_NUMBER_FIRST_ERROR)
    }
  })

  test('음수가 입력될때 유효한 범위가 아니면 THREE_DIGIT_LIMIT_ERROR가 난다', () => {
    try {
      checkValidInput('-9999')
    } catch (error) {
      expect((error as Error)?.message).toBe(THREE_DIGIT_LIMIT_ERROR)
    }
  })

  test('유효한 경우 예외 테스트 1', () => {
    expect(checkValidInput('-12+12')).toBe(true)
    expect(checkValidInput('12/12')).toBe(true)
  })
  test('유효한 경우 예외 테스트 2', () => {
    expect(checkValidInput('12-')).toBe(true)
    expect(checkValidInput('12+')).toBe(true)
  })
  test('유효한 경우 예외 테스트 3', () => {
    expect(checkValidInput('-5')).toBe(true)
    expect(checkValidInput('9')).toBe(true)
  })
  test('유효한 경우 예외 테스트 4', () => {
    expect(checkValidInput('5+9/2')).toBe(true)
  })
})
