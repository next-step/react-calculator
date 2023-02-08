import styled from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import Calculator from "./components/Calculator";
import Digits from "./components/Digits";
import Modifiers from "./components/Modifiers";
import Operations from "./components/Operations";
import Total from "./components/Total";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OPERATION_LIST = ["/", "X", "-", "+"];
const DIGIT_LIST = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function App() {
  const [number, setNumber] = useState(0);
  const [total, setTotal] = useState([]);
  const [operation, setOperation] = useState("");

  const handleDigitClick = (digit) => {
    if (String(number).length === 3) {
      return;
    }

    if (number === 0) {
      setNumber(digit);
      return;
    }

    setNumber(Number(`${number}${digit}`));
  };
  const handleOperationClick = async (_operation) => {
    if (!_operation || !number) return;

    // if (_operation === "=") {
    //   // await setTotal((num) => [...num, number]);

    //   return;
    // }

    setTotal((num) => [...num, number]);
    setOperation(_operation);
    setNumber(0);
  };
  const handleModifierClick = () => {
    setNumber(0);
    setOperation("");
  };

  const getCalculatedNumber = (numberList, operation) => {
    let result = 0;
    switch (operation) {
      case "/":
        result = numberList[0] / numberList[1];
        break;
      case "X":
        result = numberList[0] * numberList[1];
        break;
      case "-":
        result = numberList[0] - numberList[1];
        break;
      case "+":
        result = numberList[0] + numberList[1];
        break;
      default:
        result = 1;
    }

    if (!isFinite(result)) return "오류";

    return result;
  };

  const handleCalculateClick = () => {
    setTotal((num) => [...num, number]);
  };

  useEffect(() => {
    let calculatedNumber = 0;
    if (total.length > 1) {
      calculatedNumber = getCalculatedNumber(total, operation);
      setNumber(calculatedNumber);
      setTotal([]);
    }
  }, [total, operation]);

  useEffect(() => {
    console.log(number);
  }, [number]);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Calculator>
          <Total>{number}</Total>
          <Digits>
            {DIGIT_LIST.map((digit) => (
              <button onClick={() => handleDigitClick(digit)} key={digit}>
                {digit}
              </button>
            ))}
          </Digits>
          <Modifiers>
            <button onClick={handleModifierClick}>AC</button>
          </Modifiers>
          <Operations>
            {OPERATION_LIST.map((operation) => (
              <button
                onClick={() => handleOperationClick(operation)}
                key={operation}
              >
                {operation}
              </button>
            ))}
            <button onClick={handleCalculateClick}>=</button>
          </Operations>
        </Calculator>
      </Wrapper>
    </>
  );
}

export default App;
