/// <reference types="cypress" />

describe("Verify checkboxes via webdriveruni", () => {
  it("Check and validate checkbox", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    //cy.get('#checkboxes > :nth-child(1) > input').check()
    //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')

    // cy.get("#checkboxes > :nth-child(1) > input").as("option-1");
    // cy.get("@option-1").check();
    // cy.get("@option-1").check().should("be.checked");

    cy.get("#checkboxes > :nth-child(5) > input").as("option-3");
    cy.get("@option-3").uncheck().should("not.be.checked");
  });
});
