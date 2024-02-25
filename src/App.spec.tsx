import { screen } from '@testing-library/react';
import App from './App';
import render from '@/utils/test/render';
import { ERROR_MESSAGES, MAX_INPUT_DIGIT_LENGTH } from '@/constants';
import { CalculatorError } from '@/types';

beforeEach(async () => {
  await render(<App />);
});

const clickButton = async (name: string) => {
  const button = screen.getByRole('button', { name });
  await button.click();
};

const expectDisplayValue = (expectedValue: string) => {
  const display = screen.getByRole('heading', { name: expectedValue });
  expect(display).toBeInTheDocument();
};

it('App 컴포넌트가 정상적으로 렌더링된다.', async () => {
  const display = screen.getByRole('heading', { name: '0' });
  expect(display).toBeInTheDocument();
});

it('숫자 버튼을 누르면 숫자가 입력된다.', async () => {
  await clickButton('1');
  expectDisplayValue('1');
});

it('2개의 숫자에 대해 덧셈이 가능하다.', async () => {
  await clickButton('1');
  await clickButton('+');
  await clickButton('1');
  await clickButton('=');

  expectDisplayValue('2');
});

it('2개의 숫자에 대해 뺄셈이 가능하다.', async () => {
  await clickButton('2');
  await clickButton('-');
  await clickButton('2');
  await clickButton('=');

  expectDisplayValue('0');
});

it('2개의 숫자에 대해 곱셈이 가능하다.', async () => {
  await clickButton('2');
  await clickButton('X');
  await clickButton('2');
  await clickButton('=');

  expectDisplayValue('4');
});

it('2개의 숫자에 대해 나눗셈이 가능하다.', async () => {
  await clickButton('2');
  await clickButton('/');
  await clickButton('2');
  await clickButton('=');

  expectDisplayValue('1');
});

it('AC(All Clear)버튼을 누르면 0으로 초기화 한다.', async () => {
  await clickButton('1');
  await clickButton('AC');

  expectDisplayValue('0');
});

it(`숫자는 한번에 최대 ${MAX_INPUT_DIGIT_LENGTH}자리 수까지 입력 가능하다.`, async () => {
  window.alert = vi.fn();

  await clickButton('1');
  await clickButton('1');
  await clickButton('1');
  await clickButton('1');

  expect(window.alert).toHaveBeenCalledTimes(1);
  expect(window.alert).toHaveBeenCalledWith(ERROR_MESSAGES.INPUT_DIGIT_LIMIT);

  expectDisplayValue('1'.repeat(MAX_INPUT_DIGIT_LENGTH));
});

it('계산 결과를 표현할 때 소수점 이하는 버림한다.', async () => {
  await clickButton('5');
  await clickButton('/');
  await clickButton('2');
  await clickButton('=');

  expectDisplayValue('2');
});

it('연산의 결과값이 `Infinity`일 경우 `오류`라는 문자열을 보여준다.', async () => {
  await clickButton('1');
  await clickButton('/');
  await clickButton('0');
  await clickButton('=');

  expectDisplayValue(CalculatorError.Infinity);
});
