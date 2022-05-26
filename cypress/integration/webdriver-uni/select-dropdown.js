/// <reference types='cypress' />

describe("Test drpopdown Menu", () => {
  beforeEach(() => {
    // cy.viewport("macbook-15");
    cy.visit("http://www.webdriveruniversity.com");
  });
  it("It should be able to select dropdown list", () => {
    // cypress code
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#dropdowm-menu-2").select("Eclipse").contains("Eclipse");
    cy.get("#dropdowm-menu-2").select("testng").should("have.value", "testng");
  });
});
