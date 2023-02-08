const OPERATOR = {
  '+': {
    priority: 1,
    execute(num1, num2) {
      return `${parseInt(num1) + parseInt(num2)}`;
    },
  },
  '-': {
    priority: 1,
    execute(num1, num2) {
      return `${parseInt(num1) - parseInt(num2)}`;
    },
  },
  '*': {
    priority: 2,
    execute(num1, num2) {
      return `${parseInt(num1) * parseInt(num2)}`;
    },
  },
  '/': {
    priority: 2,
    execute(num1, num2) {
      return `${Math.floor(parseInt(num1) / parseInt(num2))}`;
    },
  },
};

const calculate = (originalInputs) => {
  // 중위표기법을 후위표기법으로 변환
  const inputs = [...originalInputs];
  const postfix = [];
  const operators = [];
  let input;
  while ((input = inputs.shift())) {
    if (input in OPERATOR) {
      const recentOperator = operators.shift();
      if (
        recentOperator &&
        OPERATOR[recentOperator].priority >= OPERATOR[input].priority
      ) {
        postfix.push(recentOperator);
      } else if (recentOperator) {
        operators.unshift(recentOperator);
      }
      operators.unshift(input);
    } else {
      postfix.push(input);
    }
  }
  postfix.push(...operators);

  // 후위표기법을 계산
  let result = [];
  for (let input of postfix) {
    if (input in OPERATOR) {
      const right = result.pop();
      const left = result.pop();
      result.push(OPERATOR[input].execute(left, right));
    } else {
      result.push(input);
    }
  }
  return result;
};

export const Calculator = (inputs = []) => {
  return {
    enter(value) {
      if (value === '=') return Calculator(calculate(inputs));
      return Calculator([...inputs, value]);
    },
    get value() {
      return inputs.join('');
    },
  };
};
