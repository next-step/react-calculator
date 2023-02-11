interface OperationButtonProps {
  operation: '/' | 'X' | '-' | '+' | '='
}

const OperationButton = ({ operation }: OperationButtonProps) => {
  return <button className="operation">{operation}</button>
}

export default OperationButton
