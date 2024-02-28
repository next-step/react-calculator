import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('예외 대상이 되는 경우', () => {
  describe.each([
    { orderList: ['1', '2', '3'], total: '123' },
    { orderList: ['1', '2', '3', '4'], total: '123' },
  ])(
    '숫자는 한번에 최대 3자리 수까지 입력 가능하다.',
    ({ orderList, total }) => {
      beforeEach(() => {
        render(<App />);
      });

      it('초기 표시값은 0이다.', async () => {
        const $total = await screen.findByRole('heading');

        expect($total.textContent).toBe('0');
      });

      it(`[${orderList}]를 순서대로 클릭하면 ${total}이(가) 표시된다.`, async () => {
        const $total = await screen.findByRole('heading');

        for (const order of orderList) {
          const $ = await screen.findByRole('button', { name: order });
          await userEvent.click($);
        }

        expect($total.textContent).toBe(total);
      });
    }
  );

  describe.each([{ orderList: ['5', '/', '2', '='], total: '2' }])(
    '계산 결과를 표현할 때 소수점 이하는 버림한다.',
    ({ orderList, total }) => {
      beforeEach(() => {
        render(<App />);
      });

      it('초기 표시값은 0이다.', async () => {
        const $total = await screen.findByRole('heading');

        expect($total.textContent).toBe('0');
      });

      it(`[${orderList}]를 순서대로 클릭하면 ${total}이(가) 표시된다.`, async () => {
        const $total = await screen.findByRole('heading');

        for (const order of orderList) {
          const $ = await screen.findByRole('button', { name: order });
          await userEvent.click($);
        }

        expect($total.textContent).toBe(total);
      });
    }
  );

  describe.each([{ orderList: ['1', '/', '0', '='] }])(
    '연산의 결과값이 Infinity일 경우 오류라는 문자열을 보여준다. (아이폰 참고)',
    ({ orderList }) => {
      beforeEach(() => {
        render(<App />);
      });

      it('초기 표시값은 0이다.', async () => {
        const $total = await screen.findByRole('heading');

        expect($total.textContent).toBe('0');
      });

      it(`[${orderList}]를 순서대로 클릭하면 Infinity가 표시된다.`, async () => {
        const $total = await screen.findByRole('heading');

        for (const order of orderList) {
          const $ = await screen.findByRole('button', { name: order });
          await userEvent.click($);
        }

        expect($total.textContent).toBe('Infinity');
      });
    }
  );
});
