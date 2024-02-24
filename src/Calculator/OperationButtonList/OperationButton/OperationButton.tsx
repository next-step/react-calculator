import { ComponentProps } from 'react'
import { OPERATION } from '../../Calculator.type'

type Props = { operation: OPERATION } & Omit<
  ComponentProps<'button'>,
  'children'
>

const OperationButton = ({ operation, ...rest }: Props) => {
  return (
    <button className="operation" {...rest}>
      {operation}
    </button>
  )
}

export default OperationButton
