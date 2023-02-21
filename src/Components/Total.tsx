interface TotalProps {
  total: number;
}

function Total({ total } : TotalProps) {
  return (
    <h1 id="total">{total}</h1>
  )
}

export default Total;