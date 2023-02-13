import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Calculator, { ALL_CLEAR } from './calculator';

import { DIGITS } from '../../constants/digits';
import { OPERATIONS } from '../../constants/operations';
import { ERROR_TEXT } from '../../constants/error';

test('버튼을 클릭하면 h1 태그에 버튼의 value가 텍스트로 입력된다.', () => {
  render(<Calculator />);

  const h1Element = screen.getByRole('heading');

  fireEvent.click(screen.getByText(DIGITS.ONE));
  fireEvent.click(screen.getByText(OPERATIONS.PLUS));
  fireEvent.click(screen.getByText(DIGITS.ONE));

  expect(h1Element).toHaveTextContent('1+1');
});

test('계산된 결과값을 가지고 추가적으로 계산을 진행할 수 있다. (사칙연산)', () => {
  render(<Calculator />);

  const h1Element = screen.getByRole('heading');

  fireEvent.click(screen.getByText(DIGITS.TOW));
  fireEvent.click(screen.getByText(OPERATIONS.PLUS));
  fireEvent.click(screen.getByText(DIGITS.TOW));
  fireEvent.click(screen.getByText(OPERATIONS.EQUALS));

  expect(h1Element).toHaveTextContent('4');

  fireEvent.click(screen.getByText(OPERATIONS.MINUS));
  fireEvent.click(screen.getByText(DIGITS.TOW));
  fireEvent.click(screen.getByText(OPERATIONS.EQUALS));

  expect(h1Element).toHaveTextContent('2');

  fireEvent.click(screen.getByText(OPERATIONS.MULTIPLY));
  fireEvent.click(screen.getByText(DIGITS.TOW));
  fireEvent.click(screen.getByText(OPERATIONS.EQUALS));

  expect(h1Element).toHaveTextContent('4');

  fireEvent.click(screen.getByText(OPERATIONS.DIVIDE));
  fireEvent.click(screen.getByText(DIGITS.TOW));
  fireEvent.click(screen.getByText(OPERATIONS.EQUALS));

  expect(h1Element).toHaveTextContent('2');
});

test('이상한 기호 또는 문자열이 들어갔을 때 오류가 발생한다.', () => {
  window.alert = jest.fn();

  render(<Calculator />);

  const h1Element = screen.getByRole('heading');
  const button = screen.getByText(OPERATIONS.MULTIPLY);
  button.value = '*';

  fireEvent.click(screen.getByText(DIGITS.TOW));
  fireEvent.click(button);
  fireEvent.click(screen.getByText(DIGITS.TOW));
  fireEvent.click(screen.getByText(OPERATIONS.EQUALS));

  expect(window.alert).toHaveBeenCalledTimes(1);
  expect(h1Element).toHaveTextContent(ERROR_TEXT);

  window.alert.mockClear();
});

test('기호가 숫자보다 먼저 들어갈 경우 오류가 발생한다.', () => {
  window.alert = jest.fn();

  render(<Calculator />);

  const h1Element = screen.getByRole('heading');

  fireEvent.click(screen.getByText(OPERATIONS.MULTIPLY));

  expect(window.alert).toHaveBeenCalledTimes(1);
  expect(h1Element).toHaveTextContent('0');

  window.alert.mockClear();
});

test('AC 버튼을 클릭하면 h1 태그의 텍스트가 0으로 변경된다.', () => {
  render(<Calculator />);

  const h1Element = screen.getByRole('heading');

  fireEvent.click(screen.getByText(DIGITS.TOW));
  fireEvent.click(screen.getByText(OPERATIONS.PLUS));
  fireEvent.click(screen.getByText(DIGITS.TOW));
  fireEvent.click(screen.getByText(ALL_CLEAR));

  expect(h1Element).toHaveTextContent('0');
});

test('입력한 숫자가 3자리 수 이상일 경우 오류가 발생한다.', () => {
  window.alert = jest.fn();

  render(<Calculator />);

  const h1Element = screen.getByRole('heading');

  fireEvent.click(screen.getByText(DIGITS.TOW));
  fireEvent.click(screen.getByText(DIGITS.THREE));
  fireEvent.click(screen.getByText(DIGITS.FOUR));
  fireEvent.click(screen.getByText(DIGITS.FIVE));

  expect(window.alert).toHaveBeenCalledTimes(1);
  expect(h1Element).toHaveTextContent('234');

  window.alert.mockClear();
});

test('계산된 값이 인피니티일 경우 h1 태그의 텍스트에 "오류"가 출력된다.', () => {
  render(<Calculator />);

  const h1Element = screen.getByRole('heading');

  fireEvent.click(screen.getByText(DIGITS.TOW));
  fireEvent.click(screen.getByText(DIGITS.THREE));
  fireEvent.click(screen.getByText(DIGITS.FOUR));
  fireEvent.click(screen.getByText(OPERATIONS.DIVIDE));
  fireEvent.click(screen.getByText(DIGITS.ZERO));
  fireEvent.click(screen.getByText(OPERATIONS.EQUALS));

  expect(h1Element).toHaveTextContent(ERROR_TEXT);
});
