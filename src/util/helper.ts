import { CalOperatorTypes } from "./constants";

export function doOperate(
  num1: number,
  num2: number,
  operator: CalOperatorTypes
): number | "Infinity" {
  let result = 0;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "/") {
    result = Math.floor(num1 / num2);
  } else if (operator === "X") {
    result = num1 * num2;
  }

  return Number.isNaN(result) ? "Infinity" : result;
}
