import { OPERATOR, makeOperate } from "./calculator";

test("add 연산자를 사용하면 두 수의 합이 계산된다", () => {
  const operator: OPERATOR = "add";
  const operate = makeOperate(operator);
  expect(operate(1, 2)).toBe(3);
});

test("substract 연산자를 사용하면 두 수의 차가 계산된다", () => {
  const operator: OPERATOR = "substract";
  const operate = makeOperate(operator);
  expect(operate(5, 3)).toBe(2);
});

test("multiply 연산자를 사용하면 두 수의 곱이 계산된다", () => {
  const operator: OPERATOR = "multiply";
  const operate = makeOperate(operator);
  expect(operate(2, 6)).toBe(12);
});

test("divide 연산자를 사용하면 두 수가 나눠진다", () => {
  const operator: OPERATOR = "divide";
  const operate = makeOperate(operator);
  expect(operate(4, 2)).toBe(2);
});
