import { render, screen } from "@testing-library/react";
import App from "../App";
import Calculator from "../domain/calculator";

const CALCULATOR_TEST_ID = "calculator";
test("계산기 컴포넌트가 화면에 출력된다", () => {
  render(<App calculator={new Calculator()} />);
  const calculator = screen.getByTestId(CALCULATOR_TEST_ID);
  expect(calculator).toBeVisible();
});
