const useCalculator = () => {
  const calcAdd = (a: number, b: number) => a + b;
  const calcSub = (a: number, b: number) => a - b;
  const calcMul = (a: number, b: number) => a * b;
  const calcDiv = (a: number, b: number) => a / b;

  return {
    calcAdd,
    calcDiv,
    calcSub,
    calcMul,
  };
};

export default useCalculator;