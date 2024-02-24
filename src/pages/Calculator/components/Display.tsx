import { Operators } from '../../../constants';

interface Props {
  operand: [number, number];
  operator: Operators | null;
  error: Error | null;
}

export default function Display({ operand, operator, error }: Props) {
  const result = [operand[0], operator, operand[1]].filter(Boolean).join('');

  return <h1 id='total'>{error?.message || result || 0}</h1>;
}
