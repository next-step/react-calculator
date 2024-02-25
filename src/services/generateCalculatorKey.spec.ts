import { Digit, Operator } from '@/types';
import { CalculatorKeyType } from '@/components';
import { generateCalculatorKey } from '@/services';

describe('generateCalculatorKey', () => {
  it('타입: 숫자, 값: 9, 라벨: 구 버튼 정보를 테스트합니다.', () => {
    const key = generateCalculatorKey(CalculatorKeyType.DigitKey, Digit.Nine, '구');
    expect(key).toEqual({ type: 'digitKey', value: 9, label: '구' });
  });

  it('타입: 숫자, 값: 0, 라벨: 0 버튼 정보를 테스트합니다.', () => {
    const key = generateCalculatorKey(CalculatorKeyType.DigitKey, Digit.Zero, '0');
    expect(key).toEqual({ type: 'digitKey', value: 0, label: '0' });
  });

  it('타입: 연산자, 값: 더하기, 라벨: + 버튼 정보를 테스트합니다.', () => {
    const key = generateCalculatorKey(CalculatorKeyType.OperatorKey, Operator.Add, '+');
    expect(key).toEqual({ type: 'operatorKey', value: '+', label: '+' });
  });

  it('타입: 연산자, 값: 곱셈, 라벨: 곱셈 버튼 정보를 테스트합니다.', () => {
    const key = generateCalculatorKey(CalculatorKeyType.OperatorKey, Operator.Multiply, '곱셈');
    expect(key).toEqual({ type: 'operatorKey', value: 'X', label: '곱셈' });
  });
});
