import styled from "styled-components";

function Total({ children }) {
  return <StyledTotal>{children}</StyledTotal>;
}

const StyledTotal = styled.div`
  grid-area: total;
  background-color: #333;
  color: white;
  margin: 0;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 4rem;
`;

export default Total;
