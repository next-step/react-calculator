import { ERROR_MESSAGE } from '@/constants/message'
import { Calculator } from '@/utils/calculator'

describe('Calculator', () => {
  let calculator: Calculator

  beforeEach(() => {
    calculator = new Calculator()
  })

  test('getValue() - 현재의 값을 반환한다.', () => {
    // Given, When
    const result = calculator.getValue()

    // Then
    expect(result).toBe(0)
  })

  test('clear() - 현재의 값을 0으로 초기화한다.', () => {
    // Given, When
    calculator.clear()

    // Then
    expect(calculator.getValue()).toBe(0)
  })

  describe('sum()', () => {
    test.each([
      [1,2],
      [10, 2],
      [100, 2],
      [1, -1]
    ])('2개의 숫자를 인자로 받고 덧셈한 결과를 반환한다.', (first, second) => {
      // Given, When
      calculator.sum(first, second)

      // Then
      expect(calculator.getValue()).toBe(first + second)
    });

    test.each([
      ['1', 2],
      [NaN, 2],
      [null ,2],
      [undefined, 2],
      [Symbol(1), 2]
    ])('인자로 받은 값이 숫자가 아닌 경우, 오류를 발생시킨다.', (first: any, second: any) => {
      // When, Then
      expect(() => calculator.sum(first, second)).toThrow(
        new Error(ERROR_MESSAGE.NOT_VALID_NUMBER)
      )
    });

    test('계산 결과 값이 Infinity일 경우, 오류를 발생시킨다.', () => {
      // Given
      const first = Infinity
      const second = 2

      // When, Then
      expect(() => calculator.sum(first, second)).toThrow(
        new Error(ERROR_MESSAGE.NOT_VALID_NUMBER)
      )
    })

    test('계산 결과에 소수점 값이 포함되어 있는 경우, 소수점 이하는 버림하여 반환한다.', () => {
      // Given
      const first = 1.1
      const second = 2

      // When
      calculator.sum(first, second)


      // Then
      expect(calculator.getValue()).toBe(3)
    })
  })

  describe('subtract()', () => {
    test.each([
      [1,2],
      [10, 2],
      [100, 2],
      [1, -1]
    ])('2개의 숫자를 인자로 받고 뺄셈한 결과를 반환한다.', (first, second) => {
      // Given, When
      calculator.subtract(first, second)

      // Then
      expect(calculator.getValue()).toBe(first - second)
    });

    test.each([
      ['1', 2],
      [NaN, 2],
      [null ,2],
      [undefined, 2],
      [Symbol(1), 2]
    ])('인자로 받은 값이 숫자가 아닌 경우, 오류를 발생시킨다.', (first: any, second: any) => {
      // When, Then
      expect(() => calculator.subtract(first, second)).toThrow(
        new Error(ERROR_MESSAGE.NOT_VALID_NUMBER)
      )
    });

    test('계산 결과 값이 Infinity일 경우, 오류를 발생시킨다.', () => {
      // Given
      const first = Infinity
      const second = 2

      // When, Then
      expect(() => calculator.subtract(first, second)).toThrow(
        new Error(ERROR_MESSAGE.NOT_VALID_NUMBER)
      )
    })

    test('계산 결과에 소수점 값이 포함되어 있는 경우, 소수점 이하는 버림하여 반환한다.', () => {
      // Given
      const first = 1.1
      const second = 2

      // When
      calculator.subtract(first, second)

      // Then
      expect(calculator.getValue()).toBe(0)
    })
  })

  describe('multiply()', () => {
    test.each([
      [1,2],
      [10, 2],
      [100, 2],
      [1, -1]
    ])('2개의 숫자를 인자로 받고 곱셈한 결과를 반환한다.', (first, second) => {
      // Given, When
      calculator.multiply(first, second)

      // Then
      expect(calculator.getValue()).toBe(first * second)
    });

    test.each([
      ['1', 2],
      [NaN, 2],
      [null ,2],
      [undefined, 2],
      [Symbol(1), 2]
    ])('인자로 받은 값이 숫자가 아닌 경우, 오류를 발생시킨다.', (first: any, second: any) => {
      // When, Then
      expect(() => calculator.multiply(first, second)).toThrow(
        new Error(ERROR_MESSAGE.NOT_VALID_NUMBER)
      )
    });

    test('계산 결과 값이 Infinity일 경우, 오류를 발생시킨다.', () => {
      // Given
      const first = Infinity
      const second = 2

      // When, Then
      expect(() => calculator.multiply(first, second)).toThrow(
        new Error(ERROR_MESSAGE.NOT_VALID_NUMBER)
      )
    })

    test('계산 결과에 소수점 값이 포함되어 있는 경우, 소수점 이하는 버림하여 반환한다.', () => {
      // Given
      const first = 1.1
      const second = 2

      // When
      calculator.multiply(first, second)

      // Then
      expect(calculator.getValue()).toBe(2)
    })
  })

  describe('division()', () => {
    test.each([
      [1,2],
      [10, 2],
      [100, 2],
      [1, -1]
    ])('2개의 숫자를 인자로 받고 나눗셈한 결과를 반환한다.', (first, second) => {
      // Given, When
      calculator.division(first, second)

      // Then
      expect(calculator.getValue()).toBe(Math.trunc(first / second))
    });

    test.each([
      ['1', 2],
      [NaN, 2],
      [null ,2],
      [undefined, 2],
      [Symbol(1), 2]
    ])('인자로 받은 값이 숫자가 아닌 경우, 오류를 발생시킨다.', (first: any, second: any) => {
      // When, Then
      expect(() => calculator.division(first, second)).toThrow(
        new Error(ERROR_MESSAGE.NOT_VALID_NUMBER)
      )
    });

    test('계산 결과 값이 Infinity일 경우, 오류를 발생시킨다.', () => {
      // Given
      const first = Infinity
      const second = 2

      // When, Then
      expect(() => calculator.division(first, second)).toThrow(
        new Error(ERROR_MESSAGE.NOT_VALID_NUMBER)
      )
    })

    test('계산 결과에 소수점 값이 포함되어 있는 경우, 소수점 이하는 버림하여 반환한다.', () => {
      // Given
      const first = 1.1
      const second = 2

      // When
      calculator.division(first, second)

      // Then
      expect(calculator.getValue()).toBe(0)
    })
  })
})