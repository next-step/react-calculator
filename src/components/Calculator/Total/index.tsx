import React from "react";
import { useCalculator } from "../../../modules/context/Calculator/CalculatorContext";

const Total = () => {
  const { calculator } = useCalculator();

  return (
    <h1 id="total">
      {calculator.total
        ? calculator.total
        : calculator.operation && calculator.secondDigits !== "0"
        ? calculator.secondDigits
        : calculator.firstDigits}
    </h1>
  );
};

export default Total;
