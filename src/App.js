import styled from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import Calculator from "./components/Calculator";
import Digits from "./components/Digits";
import Modifiers from "./components/Modifiers";
import Operations from "./components/Operations";
import Total from "./components/Total";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OPERATION_LIST = ["/", "X", "-", "+", "="];
const DIGIT_LIST = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

const handleDigitClick = (digit) => {
  console.log(digit);
};
const handleOperationClick = (operation) => {
  console.log(operation);
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Calculator>
          <Total>0</Total>
          <Digits>
            {DIGIT_LIST.map((digit) => (
              <button onClick={() => handleDigitClick(digit)} key={digit}>
                {digit}
              </button>
            ))}
          </Digits>
          <Modifiers>
            <button>AC</button>
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
