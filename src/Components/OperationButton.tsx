interface OperationProps {
  operation: string;
  setOperation(operation: string): void
}

function OperationButton({ operation, setOperation }: OperationProps) {
  const onClickOperation = (e: React.MouseEvent) => {
    setOperation(e.currentTarget.textContent || '');
  }

  return (
    <button className="operation"  onClick={onClickOperation}>{operation}</button>
  )
}

export default OperationButton;