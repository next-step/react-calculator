type Calculate = (num1: number, num2: number) => number;

export const add: Calculate = (num1: number, num2: number) => num1 + num2;
export const substract: Calculate = (num1: number, num2: number) => num1 - num2;
export const multiply: Calculate = (num1: number, num2: number) => num1 * num2;
export const divide: Calculate = (num1: number, num2: number) => Math.floor(num1 / num2);
