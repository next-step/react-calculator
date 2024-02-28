import { useState } from "react";
import StyledButton from "./StyledButton";

function NumberFlex({ handleNumber }) {
  const [numbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  const digitsButton = {
    backgroundColor: "#efefef",
    flex: "1 0 30%",
  };
  return (
    <div
      className="digits flex"
      style={{
        gridArea: "digit",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row-reverse",
      }}>
      {numbers.map((number) => (
        <StyledButton
          key={number}
          param={number}
          handleFunc={() => handleNumber(number)}
          props={digitsButton}
        />
      ))}
    </div>
  );
}

export default NumberFlex;
