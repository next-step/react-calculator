import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Calculator from './calculator';

test('버튼을 클릭하면 h1 태그에 버튼의 value가 텍스트로 입력된다.', () => {
  render(<Calculator />);

  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('1'));

  const h1Element = screen.getByRole('heading');

  expect(h1Element).toHaveTextContent('1+1');
});

test('= 버튼을 클릭하면 식이 계산된다. (더하기)', () => {
  render(<Calculator />);

  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('='));

  const h1Element = screen.getByRole('heading');

  expect(h1Element).toHaveTextContent('2');
});

test('= 버튼을 클릭하면 식이 계산된다. (빼기)', () => {
  render(<Calculator />);

  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('-'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('='));

  const h1Element = screen.getByRole('heading');

  expect(h1Element).toHaveTextContent('-1');
});

test('= 버튼을 클릭하면 식이 계산된다. (나누기)', () => {
  render(<Calculator />);

  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('/'));
  fireEvent.click(screen.getByText('4'));
  fireEvent.click(screen.getByText('='));

  const h1Element = screen.getByRole('heading');

  expect(h1Element).toHaveTextContent(/^0$/);
});

test('= 버튼을 클릭하면 식이 계산된다. (곱하기)', () => {
  render(<Calculator />);

  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('X'));
  fireEvent.click(screen.getByText('4'));
  fireEvent.click(screen.getByText('='));

  const h1Element = screen.getByRole('heading');

  expect(h1Element).toHaveTextContent('8');
});

test('이상한 기호 또는 문자열이 들어갔을 때 오류 발생', () => {
  render(<Calculator />);

  window.alert = jest.fn();

  const button = screen.getByText('X');
  button.value = '*';

  fireEvent.click(button);
  fireEvent.click(screen.getByText('='));

  const h1Element = screen.getByRole('heading');

  expect(window.alert).toHaveBeenCalledTimes(1);
  expect(h1Element).toHaveTextContent('');

  window.alert.mockClear();
});
