/* eslint-disable no-undef */
import Calculator from '../domain/calculator';
import { ERROR_MESSAGES } from '../domain/calculator/constant';

describe('계산기 모듈 테스트', () => {
  const calculate = (array) => {
    const calculator = new Calculator();
    array.forEach((value) => calculator.input(String(value)));
    return calculator.output;
  };

  describe('기본적인 사칙연산을 1회 테스트한다', () => {
    test('덧셈 연산을 수행한다', () => {
      const output = calculate([2, '+', 3, '=']);
      expect(output).toBe('5');
    });
    test('뺄셈 연산을 수행한다', () => {
      const output = calculate([5, '-', 3, '=']);
      expect(output).toBe('2');
    });
    test('곱셈 연산을 수행한다', () => {
      const output = calculate([2, 'x', 3, '=']);
      expect(output).toBe('6');
    });
    test('나눗셈 연산을 수행한다', () => {
      const output = calculate([3, '/', 3, '=']);
      expect(output).toBe('1');
    });
  });

  describe('2회 이상의 사칙연산을 테스트한다', () => {
    test('2 + 3 = 5 + 2 = 7 테스트', () => {
      const output = calculate([2, '+', 3, '=', '+', 2, '=']);
      expect(output).toBe('7');
    });

    test('하나의 수식을 계산(=)하고 새로운 수식을 입력할 때 두 번째 수식이 올바르게 계산(=)되어야 한다', () => {
      const output = calculate([2, '+', 1, '=', 5, '+', 2, '=']);
      expect(output).toBe('7');
    });

    test('세 개의 숫자에 대한 연산을 수행한다', () => {
      const output = calculate([1, '+', 2, '-', 3, '=']);
      expect(output).toBe('0');
    });

    test('두 번째 계산에서 십의 자리 연산을 수행한다', () => {
      const output = calculate([1, '+', 2, '+', 1, 0, '=']);
      expect(output).toBe('13');
    });

    test('4 X / 2 = 2가 나와야 한다', () => {
      const output = calculate([4, 'x', '/', 2, '=']);
      expect(output).toBe('2');
    });
  });

  describe('예외 상황을 테스트한다', () => {
    test(`0으로 나누려고 할 때 "오류" 문자를 출력한다`, () => {
      const output = calculate([1, '/', 0, '=']);
      expect(output).toBe('오류');
    });

    test('네 자리 숫자 이상을 입력할 떄 오류를 발생시킨다', () => {
      expect(() => {
        calculate([1, 2, 3, 4]);
      }).toThrowError(ERROR_MESSAGES.MAX_THREE_DIGIT_NUMBERS);
    });
  });
});
