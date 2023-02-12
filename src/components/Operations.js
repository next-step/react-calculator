import styled from "styled-components";

function Operations({ children }) {
  return <StyledOperations className="subgrid">{children}</StyledOperations>;
}

const StyledOperations = styled.div`
  grid-area: operation;

  button {
    background-color: orange;
  }
`;

export default Operations;
