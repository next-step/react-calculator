import { OperationState } from '../types';

interface Props {
  operationState: OperationState;
  error: Error | null;
}

export default function Display({ operationState, error }: Props) {
  const { operand1, operand2, operator } = operationState;
  const result = [operand1, operator, operand2]
    .filter((el) => el !== null)
    .join('');

  return <h1 id='total'>{error?.message || result || 0}</h1>;
}
