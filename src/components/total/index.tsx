import { ITotalProps } from "../../types/allProps";

function Total({ calculation }: ITotalProps) {
  const totalValue = (value: string) => {
    if (value === "") {
      return "0";
    }
    return Number(value) === Infinity ? "ERROR" : value;
  };
  return <h1 id="total">{totalValue(calculation)}</h1>;
}

export default Total;
