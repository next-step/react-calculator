import { Operator, Process } from './CalculatorProvider';

export default function calculateHelper(process: Process) {
  const mapOperatorsAndNumbers = () => {
    const expression: { [order: string]: string } = {};
    let order = 0;

    process.forEach((item, i) => {
      const nextItem = process[i + 1];
      const isOperator = (value: number | Operator) => typeof value !== 'number';

      expression[order] = (expression[order] || '') + item.toString();

      if (isOperator(item)) order++;
      if (isOperator(nextItem)) order++;
    });

    return expression;
  };

  const mathUtils = {
    add: (a: number, b: number) => a + b,
    subtract: (a: number, b: number) => a - b,
    multiply: (a: number, b: number) => a * b,
    divide: (a: number, b: number) => a / b,
  };

  const calculate = () => {
    const expression = mapOperatorsAndNumbers();
    const [a, operator, b] = Object.values(expression);
    let result: number = 0;

    switch (operator) {
      case Operator.Add:
        result = mathUtils.add(parseInt(a), parseInt(b));
        break;
      case Operator.Subtract:
        result = mathUtils.subtract(parseInt(a), parseInt(b));
        break;
      case Operator.Multiply:
        result = mathUtils.multiply(parseInt(a), parseInt(b));
        break;
      case Operator.Divide:
        result = mathUtils.divide(parseInt(a), parseInt(b));
        break;
    }

    return result;
  };

  return { calculate, mathUtils };
}
