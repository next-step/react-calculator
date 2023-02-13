import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import Calculator, { ALL_CLEAR } from './calculator';

import { DIGITS } from '../../constants/digits';
import { OPERATIONS } from '../../constants/operations';
import { ERROR_TEXT, ERROR_MESSAGE } from '../../constants/error';
import { async } from 'q';

test('버튼을 클릭하면 h1 태그에 버튼의 value가 텍스트로 입력된다.', async () => {
  const user = userEvent.setup();
  render(<Calculator />);

  const h1Element = screen.getByRole('heading');

  await user.click(screen.getByText(DIGITS.ONE));
  await user.click(screen.getByText(OPERATIONS.PLUS));
  await user.click(screen.getByText(DIGITS.ONE));

  expect(h1Element).toHaveTextContent('1+1');
});

test('계산된 결과값을 가지고 추가적으로 계산을 진행할 수 있다. (사칙연산)', async () => {
  const user = userEvent.setup();
  render(<Calculator />);

  const h1Element = screen.getByRole('heading');

  await user.click(screen.getByText(DIGITS.TOW));
  await user.click(screen.getByText(OPERATIONS.PLUS));
  await user.click(screen.getByText(DIGITS.TOW));
  await user.click(screen.getByText(OPERATIONS.EQUALS));

  expect(h1Element).toHaveTextContent('4');

  await user.click(screen.getByText(OPERATIONS.MINUS));
  await user.click(screen.getByText(DIGITS.TOW));
  await user.click(screen.getByText(OPERATIONS.EQUALS));

  expect(h1Element).toHaveTextContent('2');

  await user.click(screen.getByText(OPERATIONS.MULTIPLY));
  await user.click(screen.getByText(DIGITS.TOW));
  await user.click(screen.getByText(OPERATIONS.EQUALS));

  expect(h1Element).toHaveTextContent('4');

  await user.click(screen.getByText(OPERATIONS.DIVIDE));
  await user.click(screen.getByText(DIGITS.TOW));
  await user.click(screen.getByText(OPERATIONS.EQUALS));

  expect(h1Element).toHaveTextContent('2');
});

test('이상한 기호 또는 문자열이 들어갔을 때 오류가 발생한다.', async () => {
  const user = userEvent.setup();
  window.alert = jest.fn();

  render(<Calculator />);

  const h1Element = screen.getByRole('heading');
  const button = screen.getByText(OPERATIONS.MULTIPLY);
  button.value = '*';

  await user.click(screen.getByText(DIGITS.TOW));
  await user.click(button);
  await user.click(screen.getByText(DIGITS.TOW));
  await user.click(screen.getByText(OPERATIONS.EQUALS));

  expect(window.alert).toHaveBeenCalledWith(ERROR_MESSAGE.NOT_ALLOWED);
  expect(h1Element).toHaveTextContent(ERROR_TEXT);

  window.alert.mockClear();
});

test('기호가 숫자보다 먼저 들어갈 경우 오류가 발생한다.', async () => {
  const user = userEvent.setup();
  window.alert = jest.fn();

  render(<Calculator />);

  const h1Element = screen.getByRole('heading');

  await user.click(screen.getByText(OPERATIONS.MULTIPLY));

  expect(window.alert).toHaveBeenCalledWith(ERROR_MESSAGE.NUMBER_FIRST);
  expect(h1Element).toHaveTextContent('0');

  window.alert.mockClear();
});

test('AC 버튼을 클릭하면 h1 태그의 텍스트가 0으로 변경된다.', async () => {
  const user = userEvent.setup();
  render(<Calculator />);

  const h1Element = screen.getByRole('heading');

  await user.click(screen.getByText(DIGITS.TOW));
  await user.click(screen.getByText(OPERATIONS.PLUS));
  await user.click(screen.getByText(DIGITS.TOW));
  await user.click(screen.getByText(ALL_CLEAR));

  expect(h1Element).toHaveTextContent('0');
});

test('입력한 숫자가 3자리 수 이상일 경우 오류가 발생한다.', async () => {
  const user = userEvent.setup();
  window.alert = jest.fn();

  render(<Calculator />);

  const h1Element = screen.getByRole('heading');

  await user.click(screen.getByText(DIGITS.TOW));
  await user.click(screen.getByText(DIGITS.THREE));
  await user.click(screen.getByText(DIGITS.FOUR));
  await user.click(screen.getByText(DIGITS.FIVE));

  expect(window.alert).toHaveBeenCalledWith(ERROR_MESSAGE.NUMBER_OF_EXCEPTION);
  expect(h1Element).toHaveTextContent('234');

  window.alert.mockClear();
});

test('계산된 값이 인피니티일 경우 h1 태그의 텍스트에 "오류"가 출력된다.', async () => {
  const user = userEvent.setup();
  render(<Calculator />);

  const h1Element = screen.getByRole('heading');

  await user.click(screen.getByText(DIGITS.TOW));
  await user.click(screen.getByText(DIGITS.THREE));
  await user.click(screen.getByText(DIGITS.FOUR));
  await user.click(screen.getByText(OPERATIONS.DIVIDE));
  await user.click(screen.getByText(DIGITS.ZERO));
  await user.click(screen.getByText(OPERATIONS.EQUALS));

  expect(h1Element).toHaveTextContent(ERROR_TEXT);
});
