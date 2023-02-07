import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';

test('2개의 숫자에 대해 덧셈이 가능하다.', () => {
  render(<App />);

  const total = screen.getByRole('heading', { level: 1 });

  userEvent.click(screen.getByRole('button', { name: '7' }));
  expect(total).toHaveTextContent('7');

  userEvent.click(screen.getByRole('button', { name: '+' }));
  expect(total).toHaveTextContent('7+');

  userEvent.click(screen.getByRole('button', { name: '4' }));
  expect(total).toHaveTextContent('7+4');

  userEvent.click(screen.getByRole('button', { name: '=' }));
  expect(total).toHaveTextContent('11');
});

test('2개의 숫자에 대해 뺄셈이 가능하다.', () => {
  render(<App />);

  const total = screen.getByRole('heading', { level: 1 });

  userEvent.click(screen.getByRole('button', { name: '7' }));
  expect(total).toHaveTextContent('7');

  userEvent.click(screen.getByRole('button', { name: '-' }));
  expect(total).toHaveTextContent('7-');

  userEvent.click(screen.getByRole('button', { name: '4' }));
  expect(total).toHaveTextContent('7-4');

  userEvent.click(screen.getByRole('button', { name: '=' }));
  expect(total).toHaveTextContent('3');
});

test('2개의 숫자에 대해 곱셈이 가능하다.', () => {
  render(<App />);

  const total = screen.getByRole('heading', { level: 1 });

  userEvent.click(screen.getByRole('button', { name: '7' }));
  expect(total).toHaveTextContent('7');

  userEvent.click(screen.getByRole('button', { name: 'X' }));
  expect(total).toHaveTextContent('7X');

  userEvent.click(screen.getByRole('button', { name: '4' }));
  expect(total).toHaveTextContent('7X4');

  userEvent.click(screen.getByRole('button', { name: '=' }));
  expect(total).toHaveTextContent('28');
});

test('2개의 숫자에 대해 나눗셈이 가능하다.', () => {
  render(<App />);

  const total = screen.getByRole('heading', { level: 1 });

  userEvent.click(screen.getByRole('button', { name: '7' }));
  expect(total).toHaveTextContent('7');

  userEvent.click(screen.getByRole('button', { name: '/' }));
  expect(total).toHaveTextContent('7/');

  userEvent.click(screen.getByRole('button', { name: '4' }));
  expect(total).toHaveTextContent('7/4');

  userEvent.click(screen.getByRole('button', { name: '=' }));
  expect(total).toHaveTextContent('1');
});
