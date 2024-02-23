import styled from '.././css/index.module.css';

type Values = {
  firstValue: string;
  secondValue: string;
};

type Props = {
  values: Values;
  operation: string;
};

export default function Total({ values, operation }: Props) {
  const total = values.firstValue + operation + values.secondValue;

  return <h1 id={styled.total}>{total}</h1>;
}
