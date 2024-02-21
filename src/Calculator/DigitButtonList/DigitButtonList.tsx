import DigitButton from './DigitButton'

const DigitButtonList = () => {
  const NUMBER_LENGTH = 10
  const NUMBERS = Array.from(
    { length: NUMBER_LENGTH },
    (_, index) => NUMBER_LENGTH - index - 1,
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
