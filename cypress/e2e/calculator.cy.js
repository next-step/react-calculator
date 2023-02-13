describe("계산기", () => {
  beforeEach("페이지 방문", () => {
    cy.visit("http://localhost:3000");
  });

  it("최초 렌더링 시 display에는 0 표시", () => {
    cy.get("#total").should("have.text", "0");
  });

  it("숫자 버튼을 누르면 display에 숫자가 표시", () => {
    cy.get(".digit").contains("1").click();
    cy.get("#total").should("have.text", "1");
  });

  it("숫자 버튼을 여러 번 누르면 display에 숫자가 누적 표시", () => {
    cy.get(".digit").contains("1").click();
    cy.get(".digit").contains("2").click();
    cy.get(".digit").contains("3").click();
    cy.get("#total").should("have.text", "123");
  });

  it("숫자 버튼은 최대 3자리까지만 표시", () => {
    cy.get(".digit").contains("1").click();
    cy.get(".digit").contains("2").click();
    cy.get(".digit").contains("3").click();
    cy.get(".digit").contains("4").click();
    cy.get("#total").should("have.text", "123");
  });

  it("AC 버튼을 누르면 display에 0 표시", () => {
    cy.get(".digit").contains("1").click();
    cy.get(".digit").contains("2").click();
    cy.get(".digit").contains("3").click();
    cy.get(".modifier").click();
    cy.get("#total").should("have.text", "0");
  });
});
