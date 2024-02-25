export const calculate = (
  firstOperand: string,
  operator: string,
  secondOperand: string
) => {
  switch (operator) {
    case "+":
      return Number(firstOperand) + Number(secondOperand);
    case "-":
      return Number(firstOperand) - Number(secondOperand);
    case "X":
      return Number(firstOperand) * Number(secondOperand);
    case "/":
      return Number(firstOperand) / Number(secondOperand);
    default:
      throw Error("잘못된 연산자입니다.");
  }
};
