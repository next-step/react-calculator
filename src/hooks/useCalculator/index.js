import { useState } from "react";
import Calculator from "../../utils/calculator";

const useCalculator = () => {
  const [total, setTotal] = useState("0");
  const calculator = new Calculator();

  const update = (value) => {
    setTotal((prev) => calculator.update(value, prev));
  };

  return [total, update];
};

export default useCalculator;
