export const calculate = (firstDigit, secondDigit, operator) => {
  const first = Number(firstDigit);
  const second = Number(secondDigit);
  switch (operator) {
    case "/":
      return first / second;
    case "X":
      return first * second;
    case "+":
      return first + second;
    case "-":
      return first - second;
  }
};

export const splitTotal = (total, operator) => {
  return total.split(operator);
};
