import Digit from "./components/digit/Digit";
import Modifier from "./components/modifier/Modifier";

import Total from "./components/total/Total";
import { useState } from "react";
import Operator from "./components/operation/Operation";
import {OperationTypeEnum} from "./components/operation/Opertaiton.enum.ts";

const App = () => {
  const [number, setNumber] = useState({
    left: "0",
    right: "",
  });
  const [operator, setOperator] = useState<{
    render: string;
    type: OperationTypeEnum;
  }>({
    render: "",
    type: OperationTypeEnum.INIT,
  });

  const handleCalculatorResult = (value = "0") => {
    setNumber({ left: value, right: "" });
    setOperator({ render: "", type: OperationTypeEnum.INIT });
  };

  const PrintTotal = (print:string) => {
    if(print === 'NaN'|| print === 'Infinity') return 'Error';
    return print;
  }

  return (
    <div id="app">
      <div className="calculator">
        <Total>
          {PrintTotal(`${number.left}${operator.render}${number.right}`)}
        </Total>
        <Digit number={number} setNumber={setNumber} operator={operator} />
        <Modifier handleCalculatorResult={handleCalculatorResult} />
        <Operator
          number={number}
          operator={operator}
          setOperator={setOperator}
          handleCalculatorResult={handleCalculatorResult}
        />
      </div>
    </div>
  );
};

export default App;