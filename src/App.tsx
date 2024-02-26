import DisplayNumber from "./component/DisplayNumber";
import "./css/index.css";
import DigitNumber from "./component/DigitNumber";
import { useState } from "react";
import OperationButton from "./component/OperationButton";

function App() {
  const [displayNumber, setDisplayNumber] = useState<string>("0");

  const handleDigitNumberClick = (digitNumber: string) => {
    setDisplayNumber((prev) => {
      const regex = new RegExp("^[^\\d]*(\\d{1,3})$");
      const result = prev + digitNumber;
      if (prev === "0") {
        return digitNumber;
      } else if (!regex.test(result)) {
        alert("숫자는 세 자리까지만 입력 가능합니다!");
        return prev;
      } else return result;
    });
  };

  const handleOperationClick = (operator: string) => {
    const operators = ["/", "X", "-", "+"];
    setDisplayNumber((prev) => {
      const result = prev + operator;
      const lastChar = prev[prev.length - 1];
      if (prev === "0" && operator !== "=") {
        alert("숫자를 먼저 입력한 후 연산자를 입력해주세요!");
        return prev;
      } else if (operators.includes(lastChar)) {
        alert("숫자를 먼저 입력한 후 연산자를 입력해주세요!");
        return prev;
      } else return result;
    });
  };

  const handleClearClick = () => {
    setDisplayNumber("0");
  };

  // ^[^\d]*(\d{0,3})$

  return (
    <div className="calculator">
      <DisplayNumber displayNumber={displayNumber} />
      <div className="digits flex">
        <DigitNumber digitNumber={"9"} onClick={handleDigitNumberClick} />
        <DigitNumber digitNumber={"8"} onClick={handleDigitNumberClick} />
        <DigitNumber digitNumber={"7"} onClick={handleDigitNumberClick} />
        <DigitNumber digitNumber={"6"} onClick={handleDigitNumberClick} />
        <DigitNumber digitNumber={"5"} onClick={handleDigitNumberClick} />
        <DigitNumber digitNumber={"4"} onClick={handleDigitNumberClick} />
        <DigitNumber digitNumber={"3"} onClick={handleDigitNumberClick} />
        <DigitNumber digitNumber={"2"} onClick={handleDigitNumberClick} />
        <DigitNumber digitNumber={"1"} onClick={handleDigitNumberClick} />
        <DigitNumber digitNumber={"0"} onClick={handleDigitNumberClick} />
      </div>
      <div className="modifiers subgrid">
        <button className="modifier" onClick={handleClearClick}>
          AC
        </button>
      </div>
      <div className="operations subgrid">
        <OperationButton operator={"/"} onClick={handleOperationClick} />
        <OperationButton operator={"X"} onClick={handleOperationClick} />
        <OperationButton operator={"-"} onClick={handleOperationClick} />
        <OperationButton operator={"+"} onClick={handleOperationClick} />
        <OperationButton operator={"="} onClick={handleOperationClick} />
      </div>
    </div>
  );
}

export default App;
