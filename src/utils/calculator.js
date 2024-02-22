const MAXIMUM = 999;
const ERROR = {
  maximum: "숫자는 세 자리까지만 입력 가능합니다!",
  operator: "숫자를 먼저 입력한 후 연산자를 입력해주세요!",
};

const OPERATOR = ["+", "-", "×", "/"];

class Calculator {
  updateNumber(value, total) {
    const updateValue = Number(total + "" + value);

    if (updateValue > MAXIMUM) {
      window.alert(ERROR.maximum);
      return total;
    }

    return updateValue.toString();
  }

  updateCalculator(value, total) {
    const lastChar = total.slice(-1);

    if (OPERATOR.includes(lastChar)) {
      window.alert(ERROR.operator);
      return total;
    }

    if (total === "0") {
      window.alert(ERROR.operator);
      return total;
    }

    return total + value;
  }

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
