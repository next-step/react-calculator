export const calculate = {
  ADD: (prev: number) => (next: number) => prev + next,
  SUBTRACT: (prev: number) => (next: number) => prev - next,
  MULTIPLY: (prev: number) => (next: number) => prev * next,
  DIVIDE: (prev: number) => (next: number) => prev / next,
  EQUAL: (_: number) => null,
};
