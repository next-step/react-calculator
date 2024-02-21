import styled from '../css/index.module.css'
import useCalculator from '../hooks/useCalculator'
import Operator from './Operator'
import Digit from './Digit'

const Calculator = () => {
  const [totalValue, setTotalValue, operation, onDigitClick] = useCalculator()

  return (
    <div id={styled.app}>
      <div className={styled.calculator}>
        <h1 id={styled.total}>{totalValue}</h1>
        <Digit onDigitClick={onDigitClick} />

        <div className={`${styled.modifiers} ${styled.subgrid}`}>
          <button className={styled.modifier} onClick={() => setTotalValue('0')}>
            AC
          </button>
        </div>
        <Operator operation={operation} />
      </div>
    </div>
  )
}

export default Calculator
