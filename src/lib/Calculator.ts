import { OPERATION_SIGN } from '../constants';

export class Calculator {
  static calculate(
    { operand1, operand2 }: { operand1: number; operand2: number },
    operation: (typeof OPERATION_SIGN)[keyof typeof OPERATION_SIGN],
  ) {
    switch (operation) {
      case OPERATION_SIGN.addition:
        return operand1 + operand2;
      case OPERATION_SIGN.subtraction:
        return operand1 - operand2;
      case OPERATION_SIGN.division:
        return operand1 / operand2;
      case OPERATION_SIGN.multiplication:
        return operand1 * operand2;
      case OPERATION_SIGN.equals:
        return operand1;
      default:
        throw new Error('Invalid operation');
    }
  }
}
