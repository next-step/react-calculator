import Operator from "./Component/Operator";
import AcButton from "./Component/AcButton";
import Number from "./Component/Number";
import { useState } from "react";
function Calculotor() {
  const [expression, setExpression] = useState([0]);
  const [numberCnt, setNumberCnt] = useState(0);
  return (
    <div className="calculator">
      <h1 id="total">{expression}</h1>
      <Number
        handleNumber={(number) => {
          numberCnt < 3
            ? (setExpression([...expression, number]),
              setNumberCnt((prevCnt) => prevCnt + 1))
            : (() => {
                alert("숫자는 3자리까지만 가능합니다~");
                throw new Error("숫자는 3자리까지만 가능합니다~");
              })();
        }}
      />
      <AcButton
        handleAc={() => {
          setExpression([]);
          setNumberCnt(0);
        }}
      />
      <Operator
        handleOperation={(operation) => {
          !isNaN(expression[expression.length - 1])
            ? setExpression([...expression, operation])
            : setExpression([
                ...expression.slice(0, expression.length - 1),
                operation,
              ]);
          setNumberCnt(0);
        }}
      />
    </div>
  );
}

export default Calculotor;
