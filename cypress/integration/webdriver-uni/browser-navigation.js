/// <reference types='cypress' />

describe("Navigation back and forward", () => {
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com");
  });
  it("Navigate back", () => {
    cy.get("#contact-us").invoke("removeAttr", "target").click();
    cy.url().should("include", "contactus");
    cy.go("back");
    cy.get("#udemy-promo-thumbnail")
      .find("h1")
      .should("contain", "My Courses & Promo Codes");
    cy.wait(2000);
    cy.reload();
    cy.go("forward");
    cy.url().should("include", "contactus");
  });
});
