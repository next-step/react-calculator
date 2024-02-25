import { screen } from '@testing-library/react'
import { Calculator } from '@/components/Calculator'
import { render } from '../render'
import { isNumber } from '@/utils/validation'
import { ERROR_MESSAGE } from '@/constants/message'

const getSortedNumberButtons = () => {
  const AllButtons = screen.getAllByRole('button')

  return AllButtons.filter(button => isNumber(Number(button.textContent))).sort(
    (a, b) => Number(a.textContent) - Number(b.textContent)
  )
}

describe('Components/Calculator', () => {
  test('0부터 9까지 숫자 버튼이 보여져야 한다.', () => {
    // Given
    render(<Calculator />)
    const NumberButtons = getSortedNumberButtons()

    // When, Then
    expect(NumberButtons.length).toBe(10)
  })

  test('숫자 버튼으로 입력받은 숫자가 세 자리가 넘어가는 경우, 오류를 발생시킨다.', async () => {
    // Given
    const { user } = render(<Calculator />)
    const NumberButtons = getSortedNumberButtons()

    const spy = vi.fn()
    vi.spyOn(window, 'alert').mockImplementation(spy)

    // When
    await user.click(NumberButtons[1])
    await user.click(NumberButtons[2])
    await user.click(NumberButtons[3])
    await user.click(NumberButtons[4])

    // Then
    expect(spy).toBeCalledWith(ERROR_MESSAGE.MAX_LENGTH_NUMBER)
  })
  test('숫자를 입력받지 않은 상태에서 연산 버튼을 누른 경우, 오류를 발생시킨다.', async () => {
    // Given
    const { user } = render(<Calculator />)
    const OperationButton = screen.getByRole('button', { name: '+' })

    const spy = vi.fn()
    vi.spyOn(window, 'alert').mockImplementation(spy)

    // When
    await user.click(OperationButton)

    // Then
    expect(spy).toBeCalledWith(ERROR_MESSAGE.NOT_VALID_FORMULA)
  })
})
