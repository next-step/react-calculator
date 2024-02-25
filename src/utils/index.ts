import { EOPERATIONS } from "../enums";

export const calculateByOperator = (
  oper: Omit<keyof typeof EOPERATIONS, "=">,
  num1: number,
  num2: number
) => {
  switch (oper) {
    case "+":
      return +num1 + +num2;
    case "-":
      return +num1 - +num2;
    case "X":
      return +num1 * +num2;
    default:
      return Math.floor(+num1 / +num2);
  }
};
