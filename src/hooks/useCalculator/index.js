import { useState } from "react";
import Calculator from "../../utils/calculator";

const INITIAL = "0";

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
