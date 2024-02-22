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
    total = calculator.updateOperator("＋", total);

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
    total = calculator.updateOperator("＋", total);
    total = calculator.updateNumber(1, total);
    total = calculator.updateNumber(1, total);
    total = calculator.updateNumber(1, total);

    expect(total).toBe("111＋111");
  });

  it("연산자 연속 입력하기", () => {
    let total = "0";

    total = calculator.updateNumber(1, total);
    total = calculator.updateNumber(1, total);
    total = calculator.updateNumber(1, total);
    total = calculator.updateOperator("＋", total);
    total = calculator.updateOperator("＋", total);

    expect(total).toBe("111＋");
    expect(window.alert).toHaveBeenCalledWith(
      "숫자를 먼저 입력한 후 연산자를 입력해주세요!"
    );
  });
});

describe("계산하기", () => {
  const calculator = new Calculator();

  it("덧셈", () => {
    const total = "111＋111";

    const sum = calculator.updateCalculate(total);

    expect(sum).toBe("222");
  });

  it("뺄셈", () => {
    const total = "111-111";

    const sub = calculator.updateCalculate(total);

    expect(sub).toBe("0");
  });

  it("곱셈", () => {
    const total = "111X111";

    const mul = calculator.updateCalculate(total);

    expect(mul).toBe("12321");
  });

  it("나눗셈", () => {
    const total = "111/111";

    const div = calculator.updateCalculate(total);

    expect(div).toBe("1");
  });

  it("나눗셈 소수점 이하 버리기", () => {
    const total = "3/2";

    const div = calculator.updateCalculate(total);

    expect(div).toBe("1");
  });

  it("나눗셈 0으로 나누기", () => {
    const total = "3/0";

    const div = calculator.updateCalculate(total);

    expect(div).toBe("Infinity");
  });
});

describe("계산 연산 테스트", () => {
  const calculator = new Calculator();

  it("바로 계산하기", () => {
    const total = "0";

    const result = calculator.updateCalculate(total);

    expect(total).toBe("0");
  });

  it("숫자 입력 후 계산하기", () => {
    const total = "12";

    const result = calculator.updateCalculate(total);

    expect(result).toBe("12");
  });

  it("곱셈 연산자 입력 후 계산하기", () => {
    const total = "12X";

    const result = calculator.updateCalculate(total);

    expect(result).toBe("12");
  });

  it("덧셈 연산자 입력 후 계산하기", () => {
    const total = "12＋";

    const result = calculator.updateCalculate(total);

    expect(result).toBe("12");
  });

  it("나눗셈 연산자 입력 후 계산하기", () => {
    const total = "12/";

    const result = calculator.updateCalculate(total);

    expect(result).toBe("12");
  });

  it("뺄셈 연산자 입력 후 계산하기", () => {
    const total = "12-";

    const result = calculator.updateCalculate(total);

    expect(result).toBe("12");
  });
});

describe("입력 분기 처리", () => {
  const calculator = new Calculator();

  it("첫번째 숫자 입력", () => {
    const total = "0";

    expect(calculator.update("1", total)).toBe("1");
  });

  it("연산자 입력", () => {
    const total = "1";

    expect(calculator.update("＋", total)).toBe("1＋");
  });

  it("두번째 숫자 입력", () => {
    const total = "1＋";

    expect(calculator.update("1", total)).toBe("1＋1");
  });

  it("계산 연산자 입력", () => {
    const total = "1＋1";

    expect(calculator.update("=", total)).toBe("2");
  });
});
