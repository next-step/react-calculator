import { ComponentProps } from 'react'

type Props = ComponentProps<'button'>

const DigitButton = ({ children, ...rest }: Props) => {
  return (
    <button className="digit" {...rest}>
      {children}
    </button>
  )
}

export default DigitButton
