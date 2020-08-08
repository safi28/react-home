describe("Home Pages", () => {
  it("should render home page", () => {
    cy.visit("http://localhost:3000");
    cy.get("h1").contains("Interior Design");
  });
  it("should navigate check now button", () => {
    cy.visit("http://localhost:3000");
    cy.get("#redirect-btn").click();
    cy.get("h2").contains("Good to have you Back");
  });
  it("should Login and navigate to Private Page", () => {
    cy.visit("http://localhost:3000/api/user/signin", () => {
      cy.get("button [data-test-id='onClick']").click();
      cy.get("h1").contains("Interior Design");
      cy.visit("http://localhost:3000");
      cy.get("#test-interior").click();
      cy.get("h1").contains("Bedroom");
    });
  });
});
