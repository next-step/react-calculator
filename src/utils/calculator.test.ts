import { OperatorType } from '../common/types';
import { makeOperate } from './calculator';

test('1과 2에 add 연산자를 사용하면 3이 반환된다', () => {
  const operator: OperatorType = '+';
  const operate = makeOperate(operator);
  expect(operate(1, 2)).toBe(3);
});

test('5와 3에 substract 연산자를 사용하면 2가 반환된다', () => {
  const operator: OperatorType = '-';
  const operate = makeOperate(operator);
  expect(operate(5, 3)).toBe(2);
});

test('2와 6에 multiply 연산자를 사용하면 12가 반환된다', () => {
  const operator: OperatorType = 'X';
  const operate = makeOperate(operator);
  expect(operate(2, 6)).toBe(12);
});

test('4와 2에 divide 연산자를 사용하면 2가 반환된다', () => {
  const operator: OperatorType = '/';
  const operate = makeOperate(operator);
  expect(operate(4, 2)).toBe(2);
});

test('8과 6에 divide 연산자를 사용하면 소수점 이하는 버리고 1이 반환된다', () => {
  const operator: OperatorType = '/';
  const operate = makeOperate(operator);
  expect(operate(8, 6)).toBe(1);
});
