import { screen } from '@testing-library/react';
import { Calculator } from '@/components/Calculator';
import { render } from '../render';
import { isNumber } from '@/utils/validation';
import { ERROR_MESSAGE } from '@/constants/message';

describe('Calculator', () => {
  describe('Calculator UI-2', () => {
    test('0부터 9까지 숫자 버튼이 보여져야 한다.', () => {
      render(<Calculator/>)
      const AllButtons = screen.getAllByRole('button')
      const NumberButtons = AllButtons.filter(button => isNumber(Number(button.textContent)))

      expect(NumberButtons.length).toBe(10)
    })

    test('숫자 버튼으로 입력받은 숫자가 세 자리가 넘어가는 경우, 오류를 발생시킨다.', async () => {
      const { user } = render(<Calculator/>)
      const AllButtons = screen.getAllByRole('button')
      const NumberButtons = AllButtons.filter(button => isNumber(Number(button.textContent)))

      const spy = vi.fn()
      vi.spyOn(window, 'alert').mockImplementation(spy)

      await user.click(NumberButtons[1])
      await user.click(NumberButtons[2])
      await user.click(NumberButtons[3])
      await user.click(NumberButtons[4])

      expect(spy).toBeCalledWith(ERROR_MESSAGE.MAX_LENGTH_NUMBER)
    })
  })
  test('숫자를 입력받지 않은 상태에서 연산 버튼을 누른 경우, 오류를 발생시킨다.', async () => {
    const { user } = render(<Calculator/>)
    const OperationButton = screen.getByRole('button', { name: '+'})

    const spy = vi.fn()
    vi.spyOn(window, 'alert').mockImplementation(spy)

    await user.click(OperationButton)

    expect(spy).toBeCalledWith(ERROR_MESSAGE.NOT_VALID_FORMULA)
  })
})