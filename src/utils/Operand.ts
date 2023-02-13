const mapOperation: Record<string, (num1: string, num2: string) => number> = {
  "+": (num1, num2) => Number(num1) + Number(num2),
  "-": (num1, num2) => Number(num2) - Number(num1),
  X: (num1, num2) => Number(num1) * Number(num2),
  "/": (num1, num2) => Number(num2) / Number(num1),
};

const operand = (state: {
  targetNumber: string;
  prevNumber: string;
  operator: string;
}) => {
  const { targetNumber, prevNumber, operator } = state;
  return Math.floor(mapOperation[operator](targetNumber, prevNumber));
};

export { operand };
