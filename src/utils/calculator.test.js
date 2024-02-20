import Calculator from "./calculator";

describe("Calculator 함수 테스트", () => {
  const calculator = new Calculator();

  it("sum 함수 테스트", () => {
    expect(calculator.sum(1, 2)).toBe(3);
  });

  it("sub 함수 테스트", () => {
    expect(calculator.sub(2, 1)).toBe(1);
  });

  it("mul 함수 테스트", () => {
    expect(calculator.mul(2, 3)).toBe(6);
  });

  it("div 함수 테스트", () => {
    expect(calculator.div(6, 3)).toBe(2);
  });
});
