/// <reference types='cypress' />

describe("Test drpopdown Menu", () => {
  beforeEach(() => {
    // cy.viewport("macbook-15");
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
  it("It should be able to select dropdown list", () => {
    // cypress code
    cy.get("#dropdowm-menu-2").select("Eclipse").contains("Eclipse");
    cy.get("#dropdowm-menu-2").select("testng").should("have.value", "testng");
  });

  it("Select an option with invoke", () => {
    // cy.get("select option")
    cy.get("#dropdowm-menu-1")
      .contains("SQL")
      .invoke("index")
      .then((index) => {
        cy.get("select").eq(0).select(index);
      });
    cy.get("select").should("have.value", "sql");
  });
});
