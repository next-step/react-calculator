import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe.each([
  { orderList: ['6'] },
  { orderList: ['6', '+'] },
  { orderList: ['6', '+', '2'] },
  { orderList: ['6', '+', '2', '='] },
])('AC(All Clear)버튼을 누르면 0으로 초기화 한다.', ({ orderList }) => {
  beforeEach(() => {
    render(<App />);
  });

  it('초기 표시값은 0이다.', async () => {
    const $total = await screen.findByRole('heading', { description: '0' });

    expect($total.textContent).toBe('0');
  });

  it(`[${orderList},AC]를 순서대로 클릭하면 0이(가) 표시된다.`, async () => {
    const $total = await screen.findByRole('heading', { description: '0' });
    const $AC = await screen.findByRole('button', { name: 'AC' });

    for (const order of orderList) {
      const $ = await screen.findByRole('button', { name: order });
      await userEvent.click($);
    }
    await userEvent.click($AC);

    expect($total.textContent).toBe('0');
  });
});
