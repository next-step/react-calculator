type OPERATE = (num1: number, num2: number) => number;
export type OPERATOR = 'add' | 'substract' | 'multiply' | 'divide';

const add: OPERATE = (num1: number, num2: number) => num1 + num2;
const substract: OPERATE = (num1: number, num2: number) => num1 - num2;
const multiply: OPERATE = (num1: number, num2: number) => num1 * num2;
const divide: OPERATE = (num1: number, num2: number) => num1 / num2;

export const makeOperate = (operator: OPERATOR) => {
  switch (operator) {
    case 'add':
      return add;
    case 'substract':
      return substract;
    case 'multiply':
      return multiply;
    case 'divide':
      return divide;
  }
};
