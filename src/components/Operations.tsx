type Operations = '/' | 'X' | '-' | '+' | '=';
const operations: Operations[] = ['/', 'X', '-', '+', '='];

function Operations() {
  return (
    <div className="operations subgrid">
      {operations.map(operation => (
        <button key={operation} className="operation" name={operation} value={operation}>
          {operation}
        </button>
      ))}
    </div>
  );
}

export default Operations;
