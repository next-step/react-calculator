export const operations = {
  addOperatorToTotal: (setTotal, operation, total) =>
    setTotal((prevTotal) => prevTotal + operation),
  updateTotal: (setTotal, operation, total, getNextTotal) => {
    const newTotal = getNextTotal(operation, total);
    setTotal(newTotal);
  },
  calculateTotal: (setTotal, total, calculateTotal) => {
    const result = calculateTotal(total);
    setTotal(result.toString());
  },
};

export const shouldAddOperatorToTotal = (operation, isLastCharNumber) => {
  return operation !== "=" && isLastCharNumber;
};

export const shouldUpdateTotal = (operation) => {
  return operation !== "=";
};

export const shouldCalculateTotal = (operation, total) => {
  return operation === "=" && total.search(/[\+\-\*\/]/) !== -1;
};

export const getNextTotal = (operation, currentTotal) => {
  const operatorIndex = currentTotal.search(/[\+\-\*\/][^0-9]*$/);
  const newTotal = currentTotal.slice(0, operatorIndex) + operation;
  return newTotal;
};

export const calculateTotal = (currentTotal) => {
  const operands = currentTotal.split(/[\+\-\*\/]/);
  const operator = currentTotal.match(/[\+\-\*\/]/)[0];

  const operations = {
    "+": (a, b) => Number(a) + Number(b),
    "-": (a, b) => Number(a) - Number(b),
    "*": (a, b) => Number(a) * Number(b),
    "/": (a, b) => Number(a) / Number(b),
  };

  const result = operations[operator]
    ? operations[operator](operands[0], operands[1])
    : NaN;

  return isFinite(result) ? Math.floor(result).toString() : "오류";
};
