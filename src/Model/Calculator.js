const OPERATOR = {
  '+': {
    priority: 1,
    execute(num1, num2) {
      return `${Number(num1) + Number(num2)}`;
    },
  },
  '-': {
    priority: 1,
    execute(num1, num2) {
      return `${Number(num1) - Number(num2)}`;
    },
  },
  X: {
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

export class exceedLimitOfDigitError extends Error {}

export const Calculator = (inputs = ['0']) => {
  return {
    enter(value) {
      if (value === 'AC') {
        return Calculator();
      }

      const recentInput = inputs[inputs.length - 1];
      if (recentInput === '오류') return Calculator(['오류']);

      if (value === '=') {
        const result = calculate(inputs);
        return Calculator([
          result !== 'Infinity' && result !== '-Infinity' ? result : '오류',
        ]);
      }

      if (value in OPERATOR) {
        // 연산자 이후에 연산자가 입력된 경우
        if (recentInput in OPERATOR) {
          if (recentInput === '-') {
            const previousRecentInput = inputs[inputs.length - 2];
            if (previousRecentInput in OPERATOR) return Calculator([...inputs]);
          }

          if (value === '-') {
            return Calculator([...inputs, value]);
          } else {
            inputs.pop();
          }
        }
      } else {
        // 숫자 이후에 숫자가 입력된 경우
        if (!(recentInput in OPERATOR)) {
          if (recentInput.length >= 3) throw new exceedLimitOfDigitError();
          inputs.pop();
          return Calculator([...inputs, `${Number(recentInput + value)}`]);
        } else {
          if (recentInput === '-') {
            const previousRecentInput = inputs[inputs.length - 2];
            if (previousRecentInput in OPERATOR) {
              inputs.pop();
              return Calculator([...inputs, `-${value}`]);
            }
          }
        }
      }

      return Calculator([...inputs, value]);
    },
    get value() {
      return inputs.join(' ');
    },
  };
};
