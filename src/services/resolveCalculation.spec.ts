import { resolveCalculation } from '@/services';
import { CalculatorError } from '@/types';

it('비어있는 경우 0을 반환한다.', () => {
  const inputStack: string[] = [];
  const result = resolveCalculation(inputStack);
  expect(result).toBe(0);
});

it('숫자 하나만 있는 경우 해당 숫자를 반환한다.', () => {
  const inputStack: string[] = ['1'];
  const result = resolveCalculation(inputStack);
  expect(result).toBe(1);
});

it('연산자 하나만 있는 경우 0을 반환한다.', () => {
  const inputStack: string[] = ['+'];
  const result = resolveCalculation(inputStack);
  expect(result).toBe(0);
});

it('양수를 0으로 나누면 Infinity 반환한다.', () => {
  const inputStack: string[] = ['10', '/', '0'];
  expect(() => resolveCalculation(inputStack)).toThrowError(CalculatorError.Infinity);
});

it('음수를 0으로 나누면 Infinity 반환한다.', () => {
  const inputStack: string[] = ['-10', '/', '0'];
  expect(() => resolveCalculation(inputStack)).toThrowError(CalculatorError.Infinity);
});

it('연산자가 올바른 위치에 없으면 Invalid Operator 반환한다.', () => {
  const inputStack: string[] = ['10', '10', '10'];
  expect(() => resolveCalculation(inputStack)).toThrowError(CalculatorError.InvalidOperator);
});

it('계산한다.', () => {
  const inputStack: string[] = ['1', '+', '2', '+', '3'];
  const result = resolveCalculation(inputStack);
  expect(result).toBe(6);
});

it('마지막 요소가 연산자라면 삭제한다.', () => {
  const inputStack: string[] = ['1', '+', '2', '+', '3', '+'];
  const result = resolveCalculation(inputStack);
  expect(result).toBe(6);
});

// TODO: 연산자 우선순위 로직 구현 필요
it('연산자의 우선순위를 추가하여 계산한다.', () => {
  const inputStack: string[] = ['1', '+', '2', 'X', '3'];
  const result = resolveCalculation(inputStack);
  expect(result).toBe(7);
});
