import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe.each([
  { a: '6', b: '2', operation: '+', operationKo: '덧셈', total: '8' },
  { a: '6', b: '2', operation: '-', operationKo: '뺄셈', total: '4' },
  { a: '6', b: '2', operation: 'X', operationKo: '곱셈', total: '12' },
  { a: '6', b: '2', operation: '/', operationKo: '나눗셈', total: '3' },
])(
  '2개의 숫자에 대해 $operationKo이(가) 가능하다.',
  ({ a, b, operation, total }) => {
    beforeEach(() => {
      render(<App />);
    });

    it('초기 표시값은 0이다.', async () => {
      const $total = await screen.findByRole('heading');

      expect($total.textContent).toBe('0');
    });

    it(`${a}을 클릭하면 ${a}이(가) 표시된다.`, async () => {
      const $total = await screen.findByRole('heading');
      const $digitA = await screen.findByRole('button', { name: a });

      await userEvent.click($digitA);

      expect($total.textContent).toBe(a);
    });

    it(`[${a}, ${operation}]를 순서대로 클릭하면 ${operation}가 나타난다.`, async () => {
      const $total = await screen.findByRole('heading');
      const $digitA = await screen.findByRole('button', { name: a });
      const $operation = await screen.findByRole('button', { name: operation });

      await userEvent.click($digitA);
      await userEvent.click($operation);

      expect($total.textContent).toBe(operation);
    });

    it(`[${a}, ${operation}, ${b}]를 순서대로 클릭하면 ${b}가 나타난다.`, async () => {
      const $total = await screen.findByRole('heading');
      const $digitA = await screen.findByRole('button', { name: a });
      const $digitB = await screen.findByRole('button', { name: b });
      const $operation = await screen.findByRole('button', { name: operation });

      await userEvent.click($digitA);
      await userEvent.click($operation);
      await userEvent.click($digitB);

      expect($total.textContent).toBe(b);
    });

    it(`[${a}, ${operation}, ${b}, =]를 순서대로 클릭하면 ${total}이 나타난다.`, async () => {
      const $total = await screen.findByRole('heading');
      const $digitA = await screen.findByRole('button', { name: a });
      const $digitB = await screen.findByRole('button', { name: b });
      const $operation = await screen.findByRole('button', { name: operation });
      const $calculation = await screen.findByRole('button', { name: '=' });

      await userEvent.click($digitA);
      await userEvent.click($operation);
      await userEvent.click($digitB);
      await userEvent.click($calculation);

      expect($total.textContent).toBe(total);
    });
  }
);
