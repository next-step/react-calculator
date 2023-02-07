import styled from "styled-components";

const StyledCalculator = styled.div`
  width: 300px;
  display: grid;
  grid-template-areas:
    "total total total total"
    "modif modif modif oper"
    "digit digit digit oper"
    "digit digit digit oper"
    "digit digit digit oper"
    "digit digit digit oper";
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  height: 500px;
`;

function Calculator({ children }) {
  return <StyledCalculator>{children}</StyledCalculator>;
}

export default Calculator;
