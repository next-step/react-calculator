describe("계산기", () => {
  beforeEach("페이지 방문", () => {
    cy.visit("http://localhost:3000");
  });

  it("최초 렌더링 시 display에는 0 표시", () => {
    cy.get("#total").should("have.text", "0");
  });
});
