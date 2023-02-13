import { CalculatorButtonType } from '@/types/calculator'

interface CalculatorButtonProps {
  button: CalculatorButtonType
  onClick(button: CalculatorButtonType): void
}

const CalculatorButton = ({ button, onClick }: CalculatorButtonProps) => {
  return <button onClick={() => onClick(button)}>{button}</button>
}

export default CalculatorButton
