type Props = {
  total: string;
};

export const Total = ({ total }: Props) => {
  return <h1 id="total">{total || 0}</h1>;
};
