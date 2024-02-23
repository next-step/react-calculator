import Operator from "./Component/Operator";
import AcButton from "./Component/AcButton";
import Number from "./Component/Number";
import { useState } from "react";
function Calculotor() {
  const [expression, setExpression] = useState([]);
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
      <Operator />
    </div>
  );
}

export default Calculotor;
