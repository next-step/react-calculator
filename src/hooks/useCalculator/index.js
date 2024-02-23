import { useState } from "react";
import Calculator, { INITIAL } from "../../utils/calculator";

const useCalculator = () => {
  const [total, setTotal] = useState(INITIAL);
  const calculator = new Calculator();

  const update = (value) => {
    setTotal((prev) => calculator.update(value, prev));
  };

  const allClear = () => {
    setTotal(INITIAL);
  };

  return [total, update, allClear];
};

export default useCalculator;
