import styled from '../css/index.module.css'

const Digit = ({ onDigitClick }: { onDigitClick: (param: number) => void }) => {
  return (
    <div className={`${styled.digits} ${styled.flex}`}>
      {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((value, idx) => (
        <button type="button" key={idx} className={styled.digit} onClick={() => onDigitClick(value)}>
          {value}
        </button>
      ))}
    </div>
  )
}

export default Digit
