/// <reference types='cypress' />

describe("Use the variable and cy command", () => {
  it("Navigate to a specific product pages", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();

    cy.get("h1 .maintext").then(($textHeader) => {
      cy.log($textHeader.text());
    });
  });
});
