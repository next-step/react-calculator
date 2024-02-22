const MAXIMUM = 999;
const ERROR = {
  maximum: "숫자는 세 자리까지만 입력 가능합니다!",
  operator: "숫자를 먼저 입력한 후 연산자를 입력해주세요!",
};

const OPERATOR = ["＋", "-", "X", "/"];
const OPERATOR_REGEX = new RegExp(
  `(${OPERATOR.map((op) => op.replace(/[\＋\-\X\/]/g, "\\$&")).join("|")})`
);

const CALCULATE = "=";

class Calculator {
  operators = {
    "＋": this.sum,
    "-": this.sub,
    X: this.mul,
    "/": this.div,
  };

  isNaN(result) {
    return isNaN(result) ? "Infinity" : result;
  }

  update(value, total) {
    if (OPERATOR.includes(value)) {
      return this.updateOperator(value, total);
    } else if (value === CALCULATE) {
      return this.updateCalculate(total);
    } else {
      return this.updateNumber(value, total);
    }
  }

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

  checkBlank(parts) {
    return parts.filter((part) => part);
  }

  updateCalculate(total) {
    const parts = total.split(OPERATOR_REGEX);

    if (this.checkBlank(parts).length !== 3) {
      return parts[0];
    }

    const numbers = [];
    let operator;

    parts.forEach((part) => {
      if (OPERATOR.includes(part)) {
        operator = this.operators[part];
      } else {
        numbers.push(Number(part));
      }
    });

    return this.isNaN(operator(numbers[0], numbers[1])).toString();
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
