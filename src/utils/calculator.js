const MAXIMUM = 999;
const ERROR = {
  maximum: "숫자는 세 자리까지만 입력 가능합니다!",
  operator: "숫자를 먼저 입력한 후 연산자를 입력해주세요!",
};

class Calculator {
  total: 0;

  updateNumber(value) {
    const updateValue = Number(this.total + "" + value);

    if (updateValue > MAXIMUM) {
      window.alert(ERROR.maximum);
      return this.total;
    }

    this.total = updateValue;
    return this.total;
  }

  updateCalculator(value) {}

  sum(a, b) {
    return a + b;
  }

  sub(a, b) {
    return a - b;
  }

  mul(a, b) {
    return a * b;
  }

  div(a, b) {
    return Math.floor(a / b);
  }
}

export default Calculator;
