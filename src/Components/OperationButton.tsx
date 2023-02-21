interface OperationProps {
  operation: string;
}

function OperationButton({ operation } : OperationProps) {
  return (
    <button className="operation">{operation}</button>
  )
}

export default OperationButton;