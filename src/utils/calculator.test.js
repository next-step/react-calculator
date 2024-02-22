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

  it("소수점 이하 버리기", () => {
    expect(calculator.div(3, 2)).toBe(1);
  });
});

describe("숫자 입력 테스트", () => {
  const calculator = new Calculator();

  beforeAll(() => {
    jest.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("0 연속 입력", () => {
    let total = "0";
    total = calculator.updateNumber(0, total);
    total = calculator.updateNumber(0, total);

    expect(total).toBe("0");
  });

  it("세자리 입력", () => {
    let total = "0";
    total = calculator.updateNumber(1, total);
    total = calculator.updateNumber(1, total);
    total = calculator.updateNumber(1, total);

    expect(total).toBe("111");
  });

  it("네자리 입력", () => {
    let total = "0";
    total = calculator.updateNumber(1, total);
    total = calculator.updateNumber(1, total);
    total = calculator.updateNumber(1, total);
    total = calculator.updateNumber(1, total);

    expect(total).toBe("111");
    expect(window.alert).toHaveBeenCalledWith(
      "숫자는 세 자리까지만 입력 가능합니다!"
    );
  });

  it("숫자 0 입력 후 3자리 입력", () => {
    let total = "0";
    total = calculator.updateNumber(0, total);
    total = calculator.updateNumber(1, total);
    total = calculator.updateNumber(1, total);
    total = calculator.updateNumber(1, total);

    expect(total).toBe("111");
  });
});

describe("연산자 입력", () => {
  const calculator = new Calculator();

  beforeAll(() => {
    jest.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("연산자 먼저 입력하기", () => {
    let total = "0";
    total = calculator.updateCalculator("+", total);

    expect(total).toBe("0");
    expect(window.alert).toHaveBeenCalledWith(
      "숫자를 먼저 입력한 후 연산자를 입력해주세요!"
    );
  });

  it("연산자 입력하기", () => {
    let total = "0";

    total = calculator.updateNumber(1, total);
    total = calculator.updateNumber(1, total);
    total = calculator.updateNumber(1, total);
    total = calculator.updateCalculator("+", total);
    total = calculator.updateNumber(1, total);
    total = calculator.updateNumber(1, total);
    total = calculator.updateNumber(1, total);

    expect(total).toBe("111+111");
  });

  it("연산자 연속 입력하기", () => {
    let total = "0";

    total = calculator.updateNumber(1, total);
    total = calculator.updateNumber(1, total);
    total = calculator.updateNumber(1, total);
    total = calculator.updateCalculator("+", total);
    total = calculator.updateCalculator("+", total);

    expect(total).toBe("111+");
    expect(window.alert).toHaveBeenCalledWith(
      "숫자를 먼저 입력한 후 연산자를 입력해주세요!"
    );
  });
});
