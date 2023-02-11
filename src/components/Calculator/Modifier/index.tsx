import React from "react";
import { useCalculator } from "../../../modules/context/Calculator/CalculatorContext";

const Modifier = () => {
  const { reset } = useCalculator();

  const handleResetClick = () => {
    reset();
  };

  return (
    <div className="modifiers subgrid">
      <button className="modifier" onClick={handleResetClick}>
        AC
      </button>
    </div>
  );
};

export default Modifier;
