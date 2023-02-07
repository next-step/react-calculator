import styled from "styled-components";

const StyledOperations = styled.div`
  grid-area: oper;

  button {
    background-color: orange;
  }
`;

function Operations({ children }) {
  return <StyledOperations className="subgrid">{children}</StyledOperations>;
}

export default Operations;
