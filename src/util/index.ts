const mapOperation: Record<string, (num1: number, num2: number) => number> = {
  '+': (num1: number, num2: number) => num1 + num2,
  '-': (num1: number, num2: number) => num1 - num2,
  X: (num1: number, num2: number) => num1 * num2,
  '/': (num1: number, num2: number) => num1 / num2,
};

const calculate = (state: { digit: string; saveDigit: string; operator: string }) => {
  const { digit, saveDigit, operator } = state;

  if (!saveDigit) {
    return digit
  }
  
  return Math.floor(mapOperation[operator](+digit, +saveDigit));
};

export { calculate };