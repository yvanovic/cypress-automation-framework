/// <reference types='cypress' />

describe("Test Autocomplete list", () => {
  beforeEach(() => {
    // cy.viewport("macbook-15");
    cy.visit("/");
  });
  it("It should be able to select dropdown list", () => {
    // cypress code
    cy.get("#autocomplete-textfield")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#myInput").type("G");
    cy.get("#myInputautocomplete-list > *").each(($el, idx, $list) => {
      const productName = $el.text();
      const prod = "Garlic";
      if (prod === productName) {
        $el.trigger("click");
        cy.get("#submit-button").click();
        cy.url().should("include", "Garlic");
      }
    });
  });
});
