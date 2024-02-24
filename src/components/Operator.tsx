import { Operation } from '../constants/operation'
import styled from '../css/index.module.css'

const Operator = ({ operation }: { operation: (param: Operation) => void }) => {
  return (
    <div className={`${styled.operations} ${styled.subgrid}`}>
      {Object.entries(Operation).map(([key, value]) => (
        <button key={key} className={styled.operation} onClick={() => operation(value)}>
          {value}
        </button>
      ))}
    </div>
  )
}

export default Operator
