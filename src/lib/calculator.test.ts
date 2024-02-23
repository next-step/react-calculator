import Calculator from '@/lib/calculator'

describe('Calculator module test', () => {
  test('+가 포함된 input에 대해서 더하기 연산을 한다', () => {
    expect(new Calculator('12+3').calculate()).toBe(15)
    expect(new Calculator('-12+3').calculate()).toBe(-9)
  })

  test('-가 포함된 input에 대해서 뺄셈 연산을 한다', () => {
    expect(new Calculator('20-16').calculate()).toBe(4)
    expect(new Calculator('12-16').calculate()).toBe(-4)
  })

  test('*가 포함된 input에 대해서 곱하기 연산을 한다', () => {
    expect(new Calculator('14*3').calculate()).toBe(42)
    expect(new Calculator('-14*3').calculate()).toBe(-42)
  })

  test('/가 포함된 Input에 대해서 나눗셈 연산을 한다', () => {
    expect(new Calculator('14/2').calculate()).toBe(7)
    expect(new Calculator('14/3').calculate()).toBe(4)
    expect(new Calculator('14/0').calculate()).toBe(Infinity)
  })

  test('피연산자가 빠진 채로 연산이 이뤄지면 앞의 숫자를 반환한다', () => {
    expect(new Calculator('12+').calculate()).toBe(12)
    expect(new Calculator('12*').calculate()).toBe(12)
  })
})
