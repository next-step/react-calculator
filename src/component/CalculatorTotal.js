import { useContext } from "react";
import { ContextTotal } from "../context/ContextTotal";

const CalculatorTotal = () => {
  const { total } = useContext(ContextTotal);
  return <h1 id="total">{total}</h1>;
};

export default CalculatorTotal;
