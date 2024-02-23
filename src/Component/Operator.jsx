function Operator(number, handleNumber, numberKey) {
  console.log(number, handleNumber, numberKey);
  return (
    <div className="operations subgrid">
      <button className="operation">/</button>
      <button className="operation">X</button>
      <button className="operation">-</button>
      <button className="operation">+</button>
      <button className="operation">=</button>
    </div>
  );
}

export default Operator;
