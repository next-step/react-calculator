import DigitButton from '@components/digitButton'

import { DIGIT_NUMBER } from '@constant/calculator'

const Calculator = () => {
  return (
    <div className="calculator">
      <h1 id="total">0</h1>
      <div className="digits flex">
        {DIGIT_NUMBER.map((digit) => (
          <DigitButton key={digit} digit={digit} />
        ))}
      </div>
      <div className="modifiers subgrid">
        <button className="modifier">AC</button>
      </div>
      <div className="operations subgrid">
        <button className="operation">/</button>
        <button className="operation">X</button>
        <button className="operation">-</button>
        <button className="operation">+</button>
        <button className="operation">=</button>
      </div>
    </div>
  )
}

export default Calculator
