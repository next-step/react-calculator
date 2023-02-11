import { Operation } from '@/types/calculator'

interface OperationButtonProps {
  operation: Operation
  onClick(operation: Operation): void
}

const OperationButton = ({ operation, onClick }: OperationButtonProps) => {
  return (
    <button className="operation" onClick={() => onClick(operation)}>
      {operation}
    </button>
  )
}

export default OperationButton
