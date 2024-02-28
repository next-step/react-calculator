import Operator from "./Component/Operator";
import AcButton from "./Component/AcButton";
import NumberFlex from "./Component/NumberFlex";
import { useState } from "react";

function Calculotor() {
  const [expression, setExpression] = useState([0]);
  const [numberCnt, setNumberCnt] = useState(0);

  return (
    <div
      id="app"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}>
      <div
        className="calculator"
        style={{
          width: "300px",
          display: "grid",
          gridTemplateAreas:
            "'total total total total' 'modif modif modif oper' 'digit digit digit oper' 'digit digit digit oper' 'digit digit digit oper' 'digit digit digit oper'",
          gridAutoColumns: "1fr",
          gridAutoRows: "1fr",
          height: "500px",
        }}>
        <h1
          id="total"
          style={{
            gridArea: "total",
            backgroundColor: "#333",
            color: "white",
            margin: "0",
            padding: "1rem",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            fontSize: "4rem",
          }}>
          {expression}
        </h1>
        <NumberFlex
          handleNumber={(number) => {
            let newExpression = expression;
            if (numberCnt === 0 && expression[expression.length - 1] === 0) {
              newExpression = expression.slice(0, expression.length - 1);
              console.log("newExpression", newExpression);
              setExpression([...newExpression, number]);
              return;
            }

            numberCnt < 3
              ? (setExpression([...expression, number]),
                setNumberCnt((prevCnt) => prevCnt + 1))
              : (() => {
                  alert("숫자는 3자리까지만 가능합니다~");
                })();
          }}
        />
        <AcButton
          handleAc={() => {
            setExpression([0]);
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
          handleCalculate={() => {
            const expressionStr = expression.join("");
            let result = 0;
            const [num1, operator, num2] = expressionStr.split(/([+\-X/])/);
            const number1 = Number(num1);
            const number2 = Number(num2);
            switch (operator) {
              case "+":
                result = number1 + number2;
                break;
              case "-":
                result = number1 - number2;
                break;
              case "X":
                result = number1 * number2;
                break;
              case "/":
                number2 !== 0
                  ? (result = number1 / number2)
                  : (result = "INFINITY");
            }
            result = Math.floor(result);
            setExpression([result]);
            setNumberCnt(result.length);
            console.log("numberCnt", numberCnt);
          }}
        />
      </div>
    </div>
  );
}

export default Calculotor;
