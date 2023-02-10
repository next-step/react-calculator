const add = (a: string, b: string) => {
  return Number(a) + Number(b);
};

const subtract = (a: string, b: string) => {
  return Number(a) - Number(b);
};

const multiply = (a: string, b: string) => {
  return Number(a) * Number(b);
};

const divide = (a: string, b: string) => {
  return Number(b) / Number(a);
};

const mapOperation: Record<string, (a: string, b: string) => number> = {
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
