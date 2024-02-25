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

describe('Calculator Spec', () => {
  it('2개의 숫자에 대해 덧셈이 가능하다.', async () => {
    // Given
    const { user } = render(<Calculator />)
    const NumberButtons = getSortedNumberButtons()
    const SumButton = screen.getByRole('button', { name: '+' })
    const SubmitButton = screen.getByRole('button', { name: '=' })
    const ResultInput = screen.getByRole('textbox')

    // When
    await user.click(NumberButtons[1])
    await user.click(NumberButtons[2])
    await user.click(SumButton)
    await user.click(NumberButtons[3])
    await user.click(SubmitButton)

    // Then
    expect(ResultInput).toHaveValue('15')
  })

  it('2개의 숫자에 대해 뺄셈이 가능하다.', async () => {
    // Given
    const { user } = render(<Calculator />)
    const NumberButtons = getSortedNumberButtons()
    const SubtractButton = screen.getByRole('button', { name: '-' })
    const SubmitButton = screen.getByRole('button', { name: '=' })
    const ResultInput = screen.getByRole('textbox')

    // When
    await user.click(NumberButtons[1])
    await user.click(NumberButtons[2])
    await user.click(SubtractButton)
    await user.click(NumberButtons[3])
    await user.click(SubmitButton)

    // Then
    expect(ResultInput).toHaveValue('9')
  })

  it('2개의 숫자에 대해 곱셈이 가능하다.', async () => {
    // Given
    const { user } = render(<Calculator />)
    const NumberButtons = getSortedNumberButtons()
    const MultiplyButton = screen.getByRole('button', { name: 'X' })
    const SubmitButton = screen.getByRole('button', { name: '=' })
    const ResultInput = screen.getByRole('textbox')

    // When
    await user.click(NumberButtons[1])
    await user.click(NumberButtons[2])
    await user.click(MultiplyButton)
    await user.click(NumberButtons[3])
    await user.click(SubmitButton)

    // Then
    expect(ResultInput).toHaveValue('36')
  })

  it('2개의 숫자에 대해 나눗셈이 가능하다.', async () => {
    // Given
    const { user } = render(<Calculator />)
    const NumberButtons = getSortedNumberButtons()
    const DivisionButton = screen.getByRole('button', { name: '/' })
    const SubmitButton = screen.getByRole('button', { name: '=' })
    const ResultInput = screen.getByRole('textbox')

    // When
    await user.click(NumberButtons[1])
    await user.click(NumberButtons[2])
    await user.click(DivisionButton)
    await user.click(NumberButtons[3])
    await user.click(SubmitButton)

    // Then
    expect(ResultInput).toHaveValue('4')
  })

  it('AC(All Clear)버튼을 누르면 0으로 초기화 한다.', async () => {
    // Given
    const { user } = render(<Calculator />)
    const NumberButtons = getSortedNumberButtons()
    const ClearButton = screen.getByRole('button', { name: 'AC' })
    const ResultInput = screen.getByRole('textbox')

    // When
    await user.click(NumberButtons[1])
    await user.click(NumberButtons[2])
    await user.click(ClearButton)

    // Then
    expect(ResultInput).toHaveValue('0')
  })

  it('숫자는 한번에 최대 3자리 수까지 입력 가능하다.', async () => {
    // Given
    const spy = vi.fn()
    vi.spyOn(window, 'alert').mockImplementation(spy)

    const { user } = render(<Calculator />)
    const NumberButtons = getSortedNumberButtons()

    // When
    await user.click(NumberButtons[1])
    await user.click(NumberButtons[2])
    await user.click(NumberButtons[3])
    await user.click(NumberButtons[4])

    // Then
    expect(spy).toBeCalledWith(ERROR_MESSAGE.MAX_LENGTH_NUMBER)
  })

  it('계산 결과를 표현할 때 소수점 이하는 버림한다.', async () => {
    // Given
    const { user } = render(<Calculator />)
    const NumberButtons = getSortedNumberButtons()
    const DivisionButton = screen.getByRole('button', { name: '/' })
    const SubmitButton = screen.getByRole('button', { name: '=' })
    const ResultInput = screen.getByRole('textbox')

    // When
    await user.click(NumberButtons[5])
    await user.click(DivisionButton)
    await user.click(NumberButtons[2])
    await user.click(SubmitButton)

    // Then
    expect(ResultInput).toHaveValue('2')
  })
})
