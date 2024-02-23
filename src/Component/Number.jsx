import { useState } from "react";
import NumberButton from "./NumberButton";

function Number({ handleNumber }) {
  const [numbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

  return (
    <div className="digits flex">
      {numbers.map((number) => (
        <NumberButton
          key={number}
          number={number}
          handleAddNumber={() => handleNumber(number)}
        />
      ))}
    </div>
  );
}

export default Number;
