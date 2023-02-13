export const floorToString = (num: number | string) => {
  const targetNumber = typeof num === "string" ? parseInt(num) : num;
  return Math.floor(targetNumber).toString();
};
