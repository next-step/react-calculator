import { isNumber } from '@/utils/validation'

describe('isNumber()', () => {
  test.each([
    [1], [1.1], [-1], [-10]
  ])('인자로 숫자를 받는 경우, true를 반환한다.', (num) => {
    // Given, When
    const result = isNumber(num)

    // Then
    expect(result).toBe(true)
  })

  test.each([
    ['1'], [false], [undefined], [null], [Symbol()]
  ])('인자로 숫자가 아닌 다른 타입의 값을 받는 경우, false를 반환한다.', (num) => {
    // Given, When
    const result = isNumber(num)

    // Then
    expect(result).toBe(false)
  })

  test('인자로 NaN을 받는 경우, false를 반환한다.', () => {
    // Given
    const num = NaN

    // When
    const result = isNumber(num)

    // Then
    expect(result).toBe(false)
  })

  test('인자로 Infinity를 받는 경우, false를 반환한다.', () => {
    // Given
    const num = Infinity

    // When
    const result = isNumber(num)

    // Then
    expect(result).toBe(false)
  })
})