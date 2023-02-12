import { OPERATIONS } from "../constants";

const mapOperation: Record<string, (num1: number, num2: number) => number> = {
  [OPERATIONS.ADD]: (num1: number, num2: number) => num1 + num2,
  [OPERATIONS.SUBTRACT]: (num1: number, num2: number) => num1 - num2,
  [OPERATIONS.MULTIPLY]: (num1: number, num2: number) => num1 * num2,
  [OPERATIONS.DIVIDE]: (num1: number, num2: number) => num1 / num2,
};

export const calculate = (state: { digit: string; saveDigit: string; operator: string }) => {
  const { digit, saveDigit, operator } = state;

  if (!saveDigit) {
    return digit
  }

  return Math.floor(mapOperation[operator](+digit, +saveDigit));
};