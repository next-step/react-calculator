import { Operation } from '../hooks/useCalculator'
import styled from '../css/index.module.css'

const Operator = ({ operation }: { operation: (param: Operation) => void }) => {
  return (
    <div className={`${styled.operations} ${styled.subgrid}`}>
      <button className={styled.operation} onClick={() => operation(Operation.DIVIDED)}>
        {Operation.DIVIDED}
      </button>
      <button className={styled.operation} onClick={() => operation(Operation.MULTIPLE)}>
        {Operation.MULTIPLE}
      </button>
      <button className={styled.operation} onClick={() => operation(Operation.MINUS)}>
        {Operation.MINUS}
      </button>
      <button className={styled.operation} onClick={() => operation(Operation.SUM)}>
        {Operation.SUM}
      </button>
      <button className={styled.operation} onClick={() => operation(Operation.EQUAL)}>
        {Operation.EQUAL}
      </button>
    </div>
  )
}

export default Operator
