import Calculator from "../domain/calculator";

describe("계산기 모듈 테스트", () => {
  const calculate = (array) => {
    const calculator = new Calculator();
    array.forEach((value) => calculator.input(String(value)));
    return calculator.output();
  };
  describe("기본적인 사칙연산을 1회 테스트한다", () => {
    test("덧셈 연산을 수행한다", () => {
      const output = calculate([2, "+", 3, "="]);
      expect(output).toBe(5);
    });
    test("뺄셈 연산을 수행한다", () => {
      const output = calculate([5, "-", 3, "="]);
      expect(output).toBe(2);
    });
    test("곱셈 연산을 수행한다", () => {
      const output = calculate([2, "x", 3, "="]);
      expect(output).toBe(6);
    });
    test("나눗셈 연산을 수행한다", () => {
      const output = calculate([3, "/", 3, "="]);
      expect(output).toBe(1);
    });
  });

  describe.only("2회 이상의 사칙연산을 테스트한다", () => {
    test("2 + 3 = 5 + 2 = 7 테스트", () => {
      const output = calculate([2, "+", 3, "=", 5, "+", 2, "="]);
      expect(output).toBe(7);
    });

    // 나머지 테스트 케이스는 다음 이슈에서 진행...
  });
});
