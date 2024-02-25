import Calculator from '@/lib/calculator'

describe('Calculator module test', () => {
  test('초기 leftOperand는 0이다', () => {
    const calculator = new Calculator()

    // expect(new Calculator('12+3').calculate()).toBe(15)
    // expect(new Calculator('-12+3').calculate()).toBe(-9)
    expect(calculator.leftOperand).toBe(0)
  })

  test('+가 포함된 input에 대해서 덧셈 연산을 한다', () => {
    const calculator = new Calculator()
    calculator.updateOperand(1)
    calculator.updateOperand(2)
    calculator.updateOperator('+')
    calculator.updateOperand(3)
    expect(calculator.calculate()).toBe(12 + 3)
  })

  test('-가 포함된 input에 대해서 뺄셈 연산을 한다', () => {
    const calculator = new Calculator()
    calculator.updateOperand(1)
    calculator.updateOperand(2)
    calculator.updateOperator('-')
    calculator.updateOperand(3)
    expect(calculator.calculate()).toBe(12 - 3)
  })

  test('*가 포함된 input에 대해서 곱셈 연산을 한다', () => {
    const calculator = new Calculator()
    calculator.updateOperand(1)
    calculator.updateOperand(2)
    calculator.updateOperator('*')
    calculator.updateOperand(3)
    expect(calculator.calculate()).toBe(12 * 3)
  })

  test('/가 포함된 input에 대해서 나눗셈 연산을 한다', () => {
    const calculator = new Calculator()
    calculator.updateOperand(1)
    calculator.updateOperand(2)
    calculator.updateOperator('/')
    calculator.updateOperand(3)
    expect(calculator.calculate()).toBe(4)
  })

  test('rightOperand 없이 연산을 진행하면 leftOperand가 반환된다', () => {
    const calculator = new Calculator()
    calculator.updateOperand(1)
    calculator.updateOperand(2)
    calculator.updateOperator('*')
    expect(calculator.calculate()).toBe(12)
  })
})
