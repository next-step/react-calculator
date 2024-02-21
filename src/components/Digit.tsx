import styled from '../css/index.module.css'

const Digit = ({ onDigitClick }: { onDigitClick: (param: number) => void }) => {
  return (
    <div className={`${styled.digits} ${styled.flex}`}>
      {Array.from({ length: 10 }, (_, i) => i)
        .reverse()
        .map((v, i) => (
          <button key={i} className={styled.digit} onClick={() => onDigitClick(v)}>
            {v}
          </button>
        ))}
    </div>
  )
}

export default Digit
