const DIGIT_SELECTOR = ".digit";
const MODIFIER_SELECTOR = ".modifier";
const DISPLAY_SELECTOR = "#total";
const OPERATION_SELECTOR = ".operation";
const BASE_URL = "http://localhost:3000";

const pressDigits = (digits) => {
  digits.forEach((digit) => {
    cy.get(DIGIT_SELECTOR).contains(digit).click();
  });
};

const pressModifier = () => {
  cy.get(MODIFIER_SELECTOR).click();
};

const pressOperation = (operation) => {
  cy.get(OPERATION_SELECTOR).contains(operation).click();
};

const checkDisplay = (displayText) => {
  cy.get(DISPLAY_SELECTOR).should("have.text", displayText);
};

describe("계산기", () => {
  beforeEach("페이지 방문", () => {
    cy.visit(BASE_URL);
  });

  it("최초 렌더링 시 display에는 0 표시", () => {
    checkDisplay("0");
  });

  it("숫자 버튼을 누르면 display에 숫자가 표시", () => {
    pressDigits(["1"]);
    checkDisplay("1");
  });

  it("숫자 버튼을 여러 번 누르면 display에 숫자가 누적 표시", () => {
    pressDigits(["1", "2", "3"]);
    checkDisplay("123");
  });

  it("숫자 버튼은 최대 3자리까지만 표시", () => {
    pressDigits(["1", "2", "3", "4"]);
    checkDisplay("123");
  });

  it("AC 버튼을 누르면 display에 0 표시", () => {
    pressDigits(["1", "2", "3"]);
    pressModifier();
    checkDisplay("0");
  });

  it("숫자 버튼을 누르고 연산자 버튼을 누르면 display에 연산자 표시", () => {
    pressDigits(["1", "2", "3"]);
    pressOperation("+");
    checkDisplay("123+");
  });

  it("연산자 버튼을 여러 번 누르면 display에 마지막 연산자만 표시", () => {
    pressDigits(["1", "2", "3"]);
    pressOperation("+");
    pressOperation("-");
    checkDisplay("123-");
  });

  it("2번째 숫자를 입력하면 display에 2번째 숫자를 누적하여 표시", () => {
    pressDigits(["1", "2", "3"]);
    pressOperation("+");
    pressDigits(["4", "5", "6"]);
    checkDisplay("123+456");
  });
});
