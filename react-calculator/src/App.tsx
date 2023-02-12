import { useState } from "react";
import AC from "./components/AC";
import Container from "./components/Container";
import Numbers from "./components/Numbers";
import Operations, { OperationType } from "./components/Opertaions";
import Result from "./components/Result";

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [resultNumber, setResultNumber] = useState(0);
  const [operation, setOperation] = useState<OperationType>();
  const [done, setDone] = useState(false);

  const firstNumberHandler = (num: number) => {
    if (firstNumber.length >= 3) return;
    const number = firstNumber + num;
    setFirstNumber(number);
  };
  const secondNumberHandler = (num: number) => {
    if (secondNumber.length >= 3) return;
    const number = secondNumber + num;
    setSecondNumber(number);
  };

  const numHandler = (num: number) => {
    if (!operation) {
      firstNumberHandler(num);
      return;
    }
    secondNumberHandler(num);
  };

  const getResultValue = () => {
    if (!isFinite(resultNumber)) return "오류";
    if (done) return Math.floor(resultNumber).toString();
    if (secondNumber) {
      return secondNumber;
    } else if (firstNumber) {
      return firstNumber;
    }
    return "0";
  };

  const operationHandler = (oper: OperationType) => {
    if (done) {
      setFirstNumber(resultNumber.toString());
      setOperation(oper);
      setDone(false);
      return;
    }
    const num1 = Number(firstNumber);
    const num2 = Number(secondNumber);
    if (!num1) return;
    if (oper === "=") {
      if (num1 && num2) {
        if (operation === "+") {
          setResultNumber(num1 + num2);
        } else if (operation === "-") {
          setResultNumber(num1 - num2);
        } else if (operation === "X") {
          setResultNumber(num1 * num2);
        } else if (operation === "/") {
          setResultNumber(num1 / num2);
        }
        setDone(true);
        setOperation(undefined);
        setFirstNumber("");
        setSecondNumber("");
        return;
      }
    }
    setOperation(oper);
  };

  const allClear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation(undefined);
    setResultNumber(0);
    setDone(false);
  };
  return (
    <body>
      <div id="app">
        <Container>
          <Result value={getResultValue()} />
          <Numbers numHandler={numHandler} />
          <AC allClear={allClear} />
          <Operations operationHandler={operationHandler} />
        </Container>
      </div>
    </body>
  );
}

export default App;
