type TotalProps = {
  total: string;
};
function Total({ total }: TotalProps) {
  return <h1 id="total">{total || 0}</h1>;
}

export default Total;
