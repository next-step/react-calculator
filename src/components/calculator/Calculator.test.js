import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Calculator from './calculator';

test('버튼을 클릭하면 h1 태그에 버튼의 value가 텍스트로 입력된다.', () => {
  render(<Calculator />);

  const h1Element = screen.getByRole('heading');

  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('1'));

  expect(h1Element).toHaveTextContent('1+1');
});

test('계산된 결과값을 가지고 추가적으로 계산을 진행할 수 있다. (사칙연산)', () => {
  render(<Calculator />);

  const h1Element = screen.getByRole('heading');

  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('='));

  expect(h1Element).toHaveTextContent('4');

  fireEvent.click(screen.getByText('-'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('='));

  expect(h1Element).toHaveTextContent('2');

  fireEvent.click(screen.getByText('X'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('='));

  expect(h1Element).toHaveTextContent('4');

  fireEvent.click(screen.getByText('/'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('='));

  expect(h1Element).toHaveTextContent('2');
});

test('이상한 기호 또는 문자열이 들어갔을 때 오류가 발생한다.', () => {
  window.alert = jest.fn();

  render(<Calculator />);

  const h1Element = screen.getByRole('heading');
  const button = screen.getByText('X');
  button.value = '*';

  fireEvent.click(screen.getByText('2'));
  fireEvent.click(button);
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('='));

  expect(window.alert).toHaveBeenCalledTimes(1);
  expect(h1Element).toHaveTextContent('0');

  window.alert.mockClear();
});

test('기호가 숫자보다 먼저 들어갈 경우 오류가 발생한다.', () => {
  window.alert = jest.fn();

  render(<Calculator />);

  const h1Element = screen.getByRole('heading');

  fireEvent.click(screen.getByText('X'));

  expect(window.alert).toHaveBeenCalledTimes(1);
  expect(h1Element).toHaveTextContent('0');

  window.alert.mockClear();
});

test('AC 버튼을 클릭하면 h1 태그의 텍스트가 0으로 변경된다.', () => {
  render(<Calculator />);

  const h1Element = screen.getByRole('heading');

  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('AC'));

  expect(h1Element).toHaveTextContent('0');
});

test('입력한 숫자가 3자리 수 이상일 경우 오류가 발생한다.', () => {
  window.alert = jest.fn();

  render(<Calculator />);

  const h1Element = screen.getByRole('heading');

  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('3'));
  fireEvent.click(screen.getByText('4'));
  fireEvent.click(screen.getByText('5'));

  expect(window.alert).toHaveBeenCalledTimes(1);
  expect(h1Element).toHaveTextContent('234');

  window.alert.mockClear();
});

test('계산된 값이 인피니티일 경우 h1 태그의 텍스트에 "오류"가 출력된다.', () => {
  render(<Calculator />);

  const h1Element = screen.getByRole('heading');

  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('3'));
  fireEvent.click(screen.getByText('4'));
  fireEvent.click(screen.getByText('/'));
  fireEvent.click(screen.getByText('0'));
  fireEvent.click(screen.getByText('='));

  expect(h1Element).toHaveTextContent('오류');
});
