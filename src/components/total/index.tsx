import { ITotalProps } from "../../types/calculate";

function Total({ calculation }: ITotalProps) {
  return <h1 id="total">{calculation === "" ? 0 : calculation}</h1>;
}

export default Total;
