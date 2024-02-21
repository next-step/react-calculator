import OperationButton from './OperationButton'
import { OPERATIONS } from './OperationButton/OperationButton.const'

const OperationButtonList = () => {
  return (
    <div className="operations subgrid">
      {OPERATIONS.map((operation) => (
        <OperationButton operation={operation} />
      ))}
    </div>
  )
}

export default OperationButtonList
