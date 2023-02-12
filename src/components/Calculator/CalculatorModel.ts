import { Digit, OPERATION } from 'constants/calculator';
import type { ValueOf } from 'types';

type Operation = ValueOf<typeof OPERATION>;

const calculationOptions = {
  [OPERATION.PLUS]: (a: number, b: number) => a + b,
  [OPERATION.MINUS]: (a: number, b: number) => a - b,
  [OPERATION.MULTIPLE]: (a: number, b: number) => a * b,
  [OPERATION.DIVIDE]: (a: number, b: number) => Math.floor(a / b),
};

class CalculatorModel {
  #operation: Operation | null;
  #leftOperand: number;
  #rightOperand: number | null;
  #accumulator: string;

  constructor() {
    this.#operation = null;
    this.#leftOperand = 0;
    this.#rightOperand = null;
    this.#accumulator = '';
  }

  get operation() {
    return this.#operation;
  }
  get leftOperand() {
    return this.#leftOperand;
  }
  get rightOperand() {
    return this.#rightOperand;
  }
  get accumulator() {
    return this.#accumulator;
  }

  updateAccumulator() {
    const leftOperand = String(this.#leftOperand);
    const operation = this.#operation ?? '';
    const rightOperand = String(this.#rightOperand ?? '');

    this.#accumulator = leftOperand + operation + rightOperand;
  }

  setOperand(digit: Digit) {
    if (!this.operation) {
      this.#leftOperand = Number(this.#leftOperand + digit);
    } else {
      const newRightOperand = this.#rightOperand ? this.#rightOperand + digit : digit;
      this.#rightOperand = Number(newRightOperand);
    }

    this.updateAccumulator();
  }

  setOperation(newOperation: Operation | null) {
    this.#operation = newOperation;

    this.updateAccumulator();
  }

  calculate() {
    if (!this.#operation) {
      throw new Error('Missing Operation');
    }

    if (!this.#rightOperand) {
      throw new Error('Missing Right Operand');
    }

    const calculationOption = calculationOptions[this.#operation];
    const newLeftOperand = calculationOption(this.#leftOperand, this.#rightOperand);

    this.#leftOperand = newLeftOperand;
    this.#operation = null;
    this.#rightOperand = null;
    this.updateAccumulator();
  }

  allClear() {
    this.#leftOperand = 0;
    this.#operation = null;
    this.#rightOperand = null;
    this.#accumulator = '';
  }
}

export default CalculatorModel;
