import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Calculator from "../component/Calculator";

test("두 개의 피연산자를 더하는 수식을 결과창에 나타낸다", () => {
  render(<Calculator />);

  const h1Element = screen.getByRole("heading");

  userEvent.click(screen.getByText("1"));
  userEvent.click(screen.getByText("+"));
  userEvent.click(screen.getByText("9"));

  expect(h1Element).toHaveTextContent("1+9");
});

test("두 개의 피연산자를 연산한 결과를 결과창에 나타낸다", () => {
  render(<Calculator />);

  const h1Element = screen.getByRole("heading");

  userEvent.click(screen.getByText("1"));
  userEvent.click(screen.getByText("+"));
  userEvent.click(screen.getByText("9"));
  userEvent.click(screen.getByText("="));

  expect(h1Element).toHaveTextContent("10");
});

test("두 개의 피연산자를 연속적으로 연산한 결과를 결과창에 나타낸다", () => {
  render(<Calculator />);

  const h1Element = screen.getByRole("heading");

  userEvent.click(screen.getByText("1"));
  userEvent.click(screen.getByText("+"));
  userEvent.click(screen.getByText("9"));
  userEvent.click(screen.getByText("="));

  expect(h1Element).toHaveTextContent("10");

  userEvent.click(screen.getByText("-"));
  userEvent.click(screen.getByText("5"));
  userEvent.click(screen.getByText("="));

  expect(h1Element).toHaveTextContent("5");

  userEvent.click(screen.getByText("X"));
  userEvent.click(screen.getByText("2"));
  userEvent.click(screen.getByText("="));

  expect(h1Element).toHaveTextContent("10");

  userEvent.click(screen.getByText("/"));
  userEvent.click(screen.getByText("2"));
  userEvent.click(screen.getByText("="));

  expect(h1Element).toHaveTextContent("5");
});

test("초기화 상태에서 숫자 입력 시 새로운 숫자로 대체된다.", () => {
  render(<Calculator />);

  const h1Element = screen.getByRole("heading");

  userEvent.click(screen.getByText("5"));

  expect(h1Element).toHaveTextContent("5");
});

test("AC 버튼을 클릭하면 h1 태그의 텍스트가 0으로 변경된다.", () => {
  render(<Calculator />);

  const h1Element = screen.getByRole("heading");

  userEvent.click(screen.getByText("2"));
  userEvent.click(screen.getByText("+"));
  userEvent.click(screen.getByText("2"));
  userEvent.click(screen.getByText("AC"));

  expect(h1Element).toHaveTextContent("0");
});

test("입력한 숫자가 3자리 수 이상일 경우 오류가 발생한다.", () => {
  window.alert = jest.fn();

  render(<Calculator />);

  const h1Element = screen.getByRole("heading");

  userEvent.click(screen.getByText("2"));
  userEvent.click(screen.getByText("3"));
  userEvent.click(screen.getByText("4"));
  userEvent.click(screen.getByText("5"));

  expect(window.alert).toHaveBeenCalledTimes(1);
  expect(h1Element).toHaveTextContent("234");

  window.alert.mockClear();
});

test('계산된 값이 무한일 경우 h1 태그의 텍스트에 "오류"가 출력된다.', () => {
  render(<Calculator />);

  const h1Element = screen.getByRole("heading");

  // 무한 양수
  userEvent.click(screen.getByText("2"));
  userEvent.click(screen.getByText("/"));
  userEvent.click(screen.getByText("0"));
  userEvent.click(screen.getByText("="));

  expect(h1Element).toHaveTextContent("오류");

  //무한 음수
  userEvent.click(screen.getByText("-"));
  userEvent.click(screen.getByText("2"));
  userEvent.click(screen.getByText("/"));
  userEvent.click(screen.getByText("0"));
  userEvent.click(screen.getByText("="));

  expect(h1Element).toHaveTextContent("오류");
});
