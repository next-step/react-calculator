import styled from "styled-components";

function Modifiers({ children }) {
  return <StyledModifiers className="subgrid">{children}</StyledModifiers>;
}

const StyledModifiers = styled.div`
  grid-area: modifier;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;

  button {
    background-color: #ccc;
  }
`;

export default Modifiers;
