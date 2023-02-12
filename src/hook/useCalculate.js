import { useRef, useState } from "react";

const useCalculate = () => {
  const [total, setTotal] = useState("0");
  const firstDigitRef = useRef("0");
  const secondDigitRef = useRef("0");
  const operatorRef = useRef(null);

  return {
    total,
  };
};

export default useCalculate;
