import { useState } from "react";

interface ITotalProps {
  calculation: string;
}

function Total({ calculation }: ITotalProps) {
  return <h1 id="total">{calculation === "" ? 0 : calculation}</h1>;
}

export default Total;
