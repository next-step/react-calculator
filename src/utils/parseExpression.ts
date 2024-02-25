import { OPERATORS } from '@/constants';
import type { OperatorType } from '@/types';

const parseExpression = (expression: string) => {
  const operatorRegex = new RegExp(
    `[${OPERATORS.map((operator) => `\\${operator.label}`).join('')}]`,
    'g'
  );
  const numbers = expression
    .split(operatorRegex)
    .map((num) => parseInt(num, 10))
    .filter((num) => !Number.isNaN(num));
  const operator = operatorRegex.exec(expression) as [OperatorType] | null;

  return { numbers, operator: operator?.[0] };
};

export default parseExpression;
