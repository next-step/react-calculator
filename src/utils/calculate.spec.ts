import { calculate } from './calculate';

it('1+2 결과는 3이다.', () => {
  const result = calculate.add(1, 2);
  expect(result).toBe(3);
});

it('2-1 결과는 1이다.', () => {
  const result = calculate.subtract(2, 1);
  expect(result).toBe(1);
});

it('2*3 결과는 6이다.', () => {
  const result = calculate.multiply(2, 3);
  expect(result).toBe(6);
});

it('10/3 결과는 3이다.', () => {
  const result = calculate.divide(10, 2);
  expect(result).toBe(5);
});
