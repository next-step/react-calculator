import { screen } from '@testing-library/react';
import { Calculator } from '@/components/Calculator';
import { render } from '../render';

describe('Calculator', () => {
  test('2개의 유효한 숫자를 input으로 입력받을 수 있어야 한다.', async () => {
    const { user } = render(<Calculator/>)
    const [FirstNumberInput, SecondNumberInput] = screen.getAllByRole<HTMLInputElement>('textbox')

    await user.type(FirstNumberInput, '1')
    await user.type(SecondNumberInput, '2')

    expect(FirstNumberInput.value).toBe('1')
    expect(SecondNumberInput.value).toBe('2')
  })

  test('input은 최대 3자리 수까지만 입력받을 수 있다.', async () => {
    const { user } = render(<Calculator/>)
    const [FirstNumberInput, SecondNumberInput] = screen.getAllByRole<HTMLInputElement>('textbox')

    await user.type(FirstNumberInput, '1234')
    await user.type(SecondNumberInput, '2345')

    expect(FirstNumberInput.value).toBe('123')
    expect(SecondNumberInput.value).toBe('234')
  })

  test('2개의 숫자를 입력받고 + 버튼을 누른 후 제출 버튼을 누르면, 입력받은 두 숫자를 더한 값이 결과에 정확히 표시되어야 한다.', async () => {
    const { user } = render(<Calculator/>)
    const [FirstNumberInput, SecondNumberInput, ResultInput] = screen.getAllByRole<HTMLInputElement>('textbox')
    const SumButton = screen.getByRole('button', { name: '+' })
    const SubmitButton = screen.getByRole('button', { name: '제출' })

    await user.type(FirstNumberInput, '10')
    await user.type(SecondNumberInput, '1')
    await user.click(SumButton)
    await user.click(SubmitButton)

    expect(ResultInput).toHaveValue('11')
  })

  test('2개의 숫자를 입력받고 - 버튼을 누른 후 제출 버튼을 누르면, 입력받은 두 숫자를 뺄셈한 값이 결과에 정확히 표시되어야 한다.', async () => {
    const { user } = render(<Calculator/>)
    const [FirstNumberInput, SecondNumberInput, ResultInput] = screen.getAllByRole<HTMLInputElement>('textbox')
    const SubtractButton = screen.getByRole('button', { name: '-' })
    const SubmitButton = screen.getByRole('button', { name: '제출' })

    await user.type(FirstNumberInput, '10')
    await user.type(SecondNumberInput, '1')
    await user.click(SubtractButton)
    await user.click(SubmitButton)

    expect(ResultInput).toHaveValue('9')
  })

  test('2개의 숫자를 입력받고 x 버튼을 누른 후 제출 버튼을 누르면, 입력받은 두 숫자를 곱한 값이 결과에 정확히 표시되어야 한다.', async () => {
    const { user } = render(<Calculator/>)
    const [FirstNumberInput, SecondNumberInput, ResultInput] = screen.getAllByRole<HTMLInputElement>('textbox')
    const SubtractButton = screen.getByRole('button', { name: 'x' })
    const SubmitButton = screen.getByRole('button', { name: '제출' })

    await user.type(FirstNumberInput, '10')
    await user.type(SecondNumberInput, '10')
    await user.click(SubtractButton)
    await user.click(SubmitButton)

    expect(ResultInput).toHaveValue('100')
  })

  test('2개의 숫자를 입력받고 % 버튼을 누른 후 제출 버튼을 누르면, 입력받은 두 숫자를 나눈 값이 결과에 정확히 표시되어야 한다.', async () => {
    const { user } = render(<Calculator/>)
    const [FirstNumberInput, SecondNumberInput, ResultInput] = screen.getAllByRole<HTMLInputElement>('textbox')
    const SubtractButton = screen.getByRole('button', { name: '%' })
    const SubmitButton = screen.getByRole('button', { name: '제출' })

    await user.type(FirstNumberInput, '100')
    await user.type(SecondNumberInput, '10')
    await user.click(SubtractButton)
    await user.click(SubmitButton)

    expect(ResultInput).toHaveValue('10')
  })
})