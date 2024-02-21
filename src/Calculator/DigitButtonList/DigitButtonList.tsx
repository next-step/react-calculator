import DigitButton from './DigitButton'

const DigitButtonList = () => {
  const MAX_NUMBER = 9
  const NUMBERS = Array.from(
    { length: MAX_NUMBER },
    (_, index) => MAX_NUMBER - index,
  )

  return (
    <div className="digits flex">
      {NUMBERS.map((number) => (
        <DigitButton>{number}</DigitButton>
      ))}
    </div>
  )
}

export default DigitButtonList
