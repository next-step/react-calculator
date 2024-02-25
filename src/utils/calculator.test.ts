import { add, divide, multiply, substract } from './calculator';

test('1과 2를 add하면 3이 반환된다', () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});

test('5와 3을 substract하면 2가 반환된다', () => {
  const result = substract(5, 3);
  expect(result).toBe(2);
});

test('2와 6을 multiply하면 12가 반환된다', () => {
  const result = multiply(2, 6);
  expect(result).toBe(12);
});

test('4와 2에 divide하면 2가 반환된다', () => {
  const result = divide(4, 2);
  expect(result).toBe(2);
});

test('8과 6에 divide하면 소수점 이하는 버리고 1이 반환된다', () => {
  const result = divide(8, 6);
  expect(result).toBe(1);
});
