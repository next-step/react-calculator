const MAXIMUM = 999;
const ERROR = {
  maximum: "숫자는 세 자리까지만 입력 가능합니다!",
  operator: "숫자를 먼저 입력한 후 연산자를 입력해주세요!",
  maxOperator: "두개의 숫자 연산만 가능합니다!",
};
export const INITIAL = "0";

const INFINITY = "오류";

const OPERATOR = ["＋", "-", "X", "/"];
const OPERATOR_REGEX = new RegExp(
  `(${OPERATOR.map((op) => `\\${op}`).join("|")})`
);

const CALCULATE = "=";

class Calculator {
  operators = {
    "＋": this.sum,
    "-": this.sub,
    X: this.mul,
    "/": this.div,
  };

  isInfinity(result) {
    return result === Infinity ? INFINITY : result;
  }

  update(value, total) {
    if (total === INFINITY) {
      return total;
    } else if (OPERATOR.includes(value)) {
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

  checkOperator(lastChar, total) {
    return OPERATOR.includes(lastChar) || total === INITIAL;
  }

  checkMaxOperator(total) {
    let check = false;

    OPERATOR.forEach((oper) => {
      if (total.includes(oper)) {
        check = true;
      }
    });

    return check;
  }

  updateOperator(value, total) {
    const lastChar = total.slice(-1);

    if (this.checkOperator(lastChar, total)) {
      window.alert(ERROR.operator);
      return total;
    }

    if (this.checkMaxOperator(total)) {
      window.alert(ERROR.maxOperator);
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

    return this.isInfinity(operator(numbers[0], numbers[1])).toString();
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
