import { ITotalProps } from "../../types/calculate";

function Total({ calculation }: ITotalProps) {
  return (
    <h1 id="total">
      {calculation !== ""
        ? Number(calculation) === Infinity
          ? "ERROR"
          : calculation
        : 0}
    </h1>
  );
}

export default Total;
