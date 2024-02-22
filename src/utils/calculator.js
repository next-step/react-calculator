const MAXIMUM = 999;
const ERROR = {
  maximum: "숫자는 세 자리까지만 입력 가능합니다!",
  operator: "숫자를 먼저 입력한 후 연산자를 입력해주세요!",
};

const OPERATOR = ["+", "-", "×", "/"];
const OPERATOR_REGEX = new RegExp(
  `(${OPERATOR.map((op) => op.replace(/[\+\-\×\/]/g, "\\$&")).join("|")})`
);

class Calculator {
  updateNumber(value, total) {
    const parts = total.split(OPERATOR_REGEX);
    const lastPart = parts[parts.length - 1];

    const updateValue = Number(lastPart + "" + value);

    if (updateValue > MAXIMUM) {
      window.alert(ERROR.maximum);
      return total;
    }

    parts[parts.length - 1] = updateValue.toString();

    return parts.join("");
  }

  updateCalculator(value, total) {
    const lastChar = total.slice(-1);

    if (OPERATOR.includes(lastChar) || total === "0") {
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
