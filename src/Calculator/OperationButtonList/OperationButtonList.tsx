import { ComponentProps } from 'react'
import OperationButton from './OperationButton'
import { OPERATIONS } from './OperationButton/OperationButton.const'
import { OPERATION } from './OperationButton/OperationButton.type'

type Props = {
  onChange: (operation: OPERATION) => void
} & Omit<ComponentProps<'div'>, 'onChange'>

const OperationButtonList = ({ onChange }: Props) => {
  return (
    <div className="operations subgrid">
      {OPERATIONS.map((operation) => (
        <OperationButton
          operation={operation}
          onClick={() => onChange(operation)}
        />
      ))}
    </div>
  )
}

export default OperationButtonList
