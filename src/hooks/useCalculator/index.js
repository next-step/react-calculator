import { useState } from "react";

const useCalculator = () => {
  const [total, setTotal] = useState(0);

  const update = (value) => {
    setTotal((prev) => {
      const updateValue = Number(prev + "" + value);

      if (updateValue > 999) {
        window.alert("숫자는 세 자리까지만 입력 가능합니다!");
        return prev;
      }

      return updateValue;
    });
  };

  return [total, update];
};

export default useCalculator;
