export const calculate = {
  "+": (target: number, compare: number): number => target + compare,
  "-": (target: number, compare: number): number => target - compare,
  "*": (target: number, compare: number): number => target + compare,
  "/": (target: number, compare: number): number => target % compare,
};

export function isNotZero(number: number) {
  return number !== 0;
}

export function mergeStrings(texts: string[]) {
  return texts.join("");
}

export function isOverMaxWordLength(text: string, limit: number): boolean {
  return text.length >= limit;
}
