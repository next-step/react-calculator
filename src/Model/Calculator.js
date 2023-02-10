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
      return `${Number(num1) * Number(num2)}`;
    },
  },
  '/': {
    priority: 2,
    execute(num1, num2) {
      return `${Math.floor(Number(num1) / Number(num2))}`;
    },
  },
};

const calculate = (inputs) => {
  // 중위표기법을 후위표기법으로 변환
  const postfix = [];
  const operators = [];
  for (let input of inputs) {
    if (input in OPERATOR) {
      const recentOperator = operators.pop();
      if (recentOperator) {
        if (OPERATOR[recentOperator].priority >= OPERATOR[input].priority) {
          postfix.push(recentOperator);
        } else operators.push(recentOperator);
      }
      operators.push(input);
    } else {
      postfix.push(input);
    }
  }
  postfix.push(...operators.reverse());

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
  return result.pop();
};

export const Calculator = (inputs = []) => {
  return {
    enter(value) {
      if (value === '=') {
        const result = calculate(inputs);
        return Calculator([result !== 'Infinity' ? result : '오류']);
      }
      return Calculator([...inputs, value]);
    },
    get value() {
      return inputs.join('');
    },
  };
};
