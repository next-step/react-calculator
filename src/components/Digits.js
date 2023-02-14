import styled from "styled-components";

function Digits({ children }) {
  return <StyledDigits className="flex">{children}</StyledDigits>;
}

const StyledDigits = styled.div`
  grid-area: digit;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;

  button {
    flex: 1 0 30%;
    background-color: #efefef;
  }
  .wide {
    flex: 2 0 60%;
    order: 1;
  }
`;

export default Digits;
