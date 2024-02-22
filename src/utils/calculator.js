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
  operators = {
    "+": this.sum,
    "-": this.sub,
    "×": this.mul,
    "/": this.div,
  };

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

  updateOperator(value, total) {
    const lastChar = total.slice(-1);

    if (OPERATOR.includes(lastChar) || total === "0") {
      window.alert(ERROR.operator);
      return total;
    }

    return total + value;
  }

  calculate(total) {
    const parts = total.split(OPERATOR_REGEX);

    const numbers = [];
    let operator;

    parts.forEach((part) => {
      if (OPERATOR.includes(part)) {
        operator = this.operators[part];
      } else {
        numbers.push(Number(part));
      }
    });

    return operator(numbers[0], numbers[1]).toString();
  }

  sum(a = 0, b = 0) {
    return a + b;
  }

  sub(a = 0, b = 0) {
    return a - b;
  }

  mul(a = 0, b = 0) {
    return a * b;
  }

  div(a = 0, b = 0) {
    return Math.floor(a / b);
  }
}

export default Calculator;
