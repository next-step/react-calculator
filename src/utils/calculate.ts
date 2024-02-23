type Operands = {
  firstValue: string;
  secondValue: string;
};

const calculate = (operation: string, operands: Operands) => {
  const { firstValue, secondValue } = operands;

  switch (operation) {
    case '/':
      return Math.floor(Number(firstValue) / Number(secondValue));
    case 'X':
      return Number(firstValue) * Number(secondValue);
    case '-':
      return Number(firstValue) - Number(secondValue);
    case '+':
      return Number(firstValue) + Number(secondValue);
    default:
      break;
  }
};

export default calculate;
