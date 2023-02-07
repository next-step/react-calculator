import styled from "styled-components";

const StyledModifiers = styled.div`
  grid-area: modif;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;

  button {
    background-color: #ccc;
  }
`;

function Modifiers({ children }) {
  return <StyledModifiers className="subgrid">{children}</StyledModifiers>;
}

export default Modifiers;
