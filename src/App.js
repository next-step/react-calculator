import styled from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import Calculator from "./components/Calculator";
import Digits from "./components/Digits";
import Modifiers from "./components/Modifiers";
import Operations from "./components/Operations";
import Total from "./components/Total";
import useCalculate from "./hooks/useCalculate";
import { OPERATION_LIST } from "./constants/operation";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DIGIT_LIST = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function App() {
  const {
    digit,
    handleCalculateClick,
    handleDigitClick,
    handleModifierClick,
    handleOperationClick,
  } = useCalculate();

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Calculator>
          <Total>{digit}</Total>
          <Digits>
            {DIGIT_LIST.map((digit) => (
              <button onClick={handleDigitClick(digit)} key={digit}>
                {digit}
              </button>
            ))}
          </Digits>
          <Modifiers>
            <button onClick={handleModifierClick}>AC</button>
          </Modifiers>
          <Operations>
            {OPERATION_LIST.map((operation) => (
              <button onClick={handleOperationClick(operation)} key={operation}>
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
