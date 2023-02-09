import { CalculateOperators } from "./constants";

export const operations: Record<
  CalculateOperators,
  (num1: number, num2: number) => number
> = {
  "+": (num1, num2) => num1 + num2,
  "-": (num1, num2) => num1 - num2,
  "/": (num1, num2) => Math.floor(num1 / num2),
  X: (num1, num2) => num1 * num2,
};
