import { useState } from 'react'
import DigitButtonList from './DigitButtonList'
import OperationButtonList from './OperationButtonList'
import { OPERATION } from './OperationButtonList/OperationButton/OperationButton.type'

const Calculator = () => {
  const [result, setResult] = useState(0)
  const [leftOperand, setLeftOperand] = useState('')
  const [operation, setOperation] = useState<OPERATION | ''>('')
  const [rightOperand, setRightOperand] = useState('')

  const calculate = ({
    leftOperand,
    operation,
    rightOperand,
  }: {
    leftOperand: number
    operation: OPERATION | ''
    rightOperand: number
  }) => {
    switch (operation) {
      case '+':
        return leftOperand + rightOperand
      case '-':
        return leftOperand - rightOperand
      case '/':
        return leftOperand / rightOperand
      case 'X':
        return leftOperand * rightOperand
      default:
        return 0
    }
  }

  return (
    <section className="calculator">
      <h1 id="total">
        {!leftOperand ? result : `${leftOperand}${operation}${rightOperand}`}
      </h1>
      <DigitButtonList
        onChange={(digit: number) => {
          if (!operation) {
            setLeftOperand((prevLeftOperand) => `${prevLeftOperand}${digit}`)

            return
          }

          setRightOperand((prevRightOperand) => `${prevRightOperand}${digit}`)
        }}
      />
      <div className="modifiers subgrid">
        <button className="modifier">AC</button>
      </div>
      <OperationButtonList
        onChange={(nextOperation: OPERATION) => {
          if (nextOperation !== '=') {
            setOperation(nextOperation)

            return
          }

          const currentResult = calculate({
            leftOperand: Number(leftOperand),
            operation,
            rightOperand: Number(rightOperand),
          })

          setResult(currentResult)
          setLeftOperand(String(currentResult))
          setOperation('')
          setRightOperand('')
        }}
      />
    </section>
  )
}

export default Calculator
