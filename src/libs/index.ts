const add = (num1: string, num2: string) => {
  return Number(num1) + Number(num2);
};

const subtract = (num1: string, num2: string) => {
  return Number(num2) - Number(num1);
};

const multiply = (num1: string, num2: string) => {
  return Number(num1) * Number(num2);
};

const divide = (num1: string, num2: string) => {
  return Number(num2) / Number(num1);
};

const mapOperation: Record<string, (num1: string, num2: string) => number> = {
  '+': add,
  '-': subtract,
  X: multiply,
  '/': divide,
};

const calculate = (state: { targetNumber: string; savedNumber: string; operator: string }) => {
  const { targetNumber, savedNumber, operator } = state;
  return Math.floor(mapOperation[operator](targetNumber, savedNumber));
};

export { calculate };
