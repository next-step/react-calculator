import styled from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import Calculator from "./components/Calculator";
import Digits from "./components/Digits";
import Modifiers from "./components/Modifiers";
import Operations from "./components/Operations";
import Total from "./components/Total";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OPERATION_LIST = ["/", "X", "-", "+", "="];
const DIGIT_LIST = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function App() {
  const [number, setNumber] = useState(0);
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
  const handleOperationClick = (_operation) => {
    if (!_operation || !number) return;

    if (_operation === "=") {
      setNumber(0);
      setOperation("");
      return;
    }

    setOperation(_operation);
  };
  const handleModifierClick = () => {
    setNumber(0);
    setOperation("");
  };

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
          </Operations>
        </Calculator>
      </Wrapper>
    </>
  );
}

export default App;
