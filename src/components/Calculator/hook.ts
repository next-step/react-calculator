import { MouseEventHandler, useState } from 'react'

export const useCalculator = () => {
  const [number1, setNumber1] = useState<number | null>(null)
  const [number2, setNumber2] = useState<number | null>(null)
  const [operator, setOperator] = useState<string | null>(null)

  const onClickNumber: MouseEventHandler<HTMLButtonElement> = (e) => {}

  const onClickOperator: MouseEventHandler<HTMLButtonElement> = () => {}

  const onClickOutput = () => {}

  const onClickReset = () => {}

  const getUserInputs = (): string => {
    return ''
  }

  return {
    userInputs: getUserInputs(),
    handler: {
      onClickNumber,
      onClickOperator,
      onClickOutput,
      onClickReset,
    },
  }
}
