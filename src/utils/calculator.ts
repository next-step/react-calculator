// 계산기 클래스
export class Calculator {
  readonly num1: number = 0;
  readonly num2: number = 0;

  constructor(num1: number, num2: number) {
    this.num1 = num1;
    this.num2 = num2;
  }

  add = () => this.num1 + this.num2;

  minus = () => this.num1 - this.num2;

  multiple = () => this.num1 * this.num2;

  divide = () => Math.floor(this.num1 / this.num2);
}
