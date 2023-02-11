import React from "react";

import Total from "../../components/Calculator/Total";
import Digits from "../../components/Calculator/Digits";
import Modifier from "../../components/Calculator/Modifier";
import Operations from "../../components/Calculator/Operations";
import { CalculatorProvider } from "../../modules/context/Calculator/CalculatorContext";

const index = () => {
  return (
    <CalculatorProvider>
      <div className="calculator">
        <Total />
        <Digits />
        <Modifier />
        <Operations />
      </div>
    </CalculatorProvider>
  );
};

export default index;
