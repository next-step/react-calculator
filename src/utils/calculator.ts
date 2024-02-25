import { OperatorType } from '../common/types';

type OPERATE = (num1: number, num2: number) => number;

const add: OPERATE = (num1: number, num2: number) => num1 + num2;
const substract: OPERATE = (num1: number, num2: number) => num1 - num2;
const multiply: OPERATE = (num1: number, num2: number) => Math.floor(num1 * num2);
const divide: OPERATE = (num1: number, num2: number) => Math.floor(num1 / num2);

export const makeOperate = (operator: OperatorType) => {
  switch (operator) {
    case '+':
      return add;
    case '-':
      return substract;
    case 'X':
      return multiply;
    case '/':
      return divide;
    case '=':
      throw Error('계산할 수 없는 연산자입니다!');
    default:
      throw Error('없는 연산자입니다!');
  }
};
