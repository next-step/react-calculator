import { ComponentProps } from 'react'
import OperationButton from './OperationButton'
import { OPERATIONS } from '../Calculator.const'
import { OPERATION } from '../Calculator.type'

type Props = {
  onChange: (operation: OPERATION) => void
} & Omit<ComponentProps<'div'>, 'onChange'>

const OperationButtonList = ({ onChange }: Props) => {
  return (
    <div className="operations subgrid">
      {OPERATIONS.map((operation) => (
        <OperationButton
          key={operation}
          operation={operation}
          onClick={() => onChange(operation)}
        />
      ))}
    </div>
  )
}

export default OperationButtonList
