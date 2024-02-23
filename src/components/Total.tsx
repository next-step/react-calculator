import styled from '.././css/index.module.css';

type Operands = {
  firstValue: string;
  secondValue: string;
};

type Props = {
  operands: Operands;
  operation: string;
};

export default function Total({ operands, operation }: Props) {
  const total = operands.firstValue + operation + operands.secondValue;

  return <h1 id={styled.total}>{total === 'Infinity' ? '오류' : total}</h1>;
}
