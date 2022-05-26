/// <reference types='cypress' />

describe("Test alert and popup", () => {
  beforeEach(() => {
    // cy.viewport("macbook-15");
    cy.visit("http://www.webdriveruniversity.com");
  });
  it("It should be able to dismiss alert", () => {
    // cypress code
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#button1").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am an alert box!");
    });
  });

  it("Validate JavaScript confirm", () => {
    // cypress code
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#button4").click();
    cy.on("window:confirm", () => {
      return false;
    });
    cy.get("#confirm-alert-text").contains("You pressed Cancel!");
  });
});
