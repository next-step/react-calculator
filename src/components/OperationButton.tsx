import { Operator } from '@/types/calculator'

interface OperationButtonProps {
  operation: Operator
  onClick(operation: Operator): void
}

const OperationButton = ({ operation, onClick }: OperationButtonProps) => {
  return (
    <button className="operation" onClick={() => onClick(operation)}>
      {operation}
    </button>
  )
}

export default OperationButton
