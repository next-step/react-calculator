import { Operators } from '../../../constants';

interface Props {
  operand: [number, number];
  operator: Operators | null;
}

export default function Display({ operand, operator }: Props) {
  const result = [operand[0], operator, operand[1]]
    .map((el) => {
      if (!el) return null;
      return el;
    })
    .join('');

  return <h1 id='total'>{result || 0}</h1>;
}
