/// <reference types='cypress' />
describe("Test Contact us on automatio test store", () => {
  beforeEach(() => {
    // cy.viewport("macbook-15");
    cy.visit("http://www.automationteststore.com");
  });

  it("Log all the fragrance", () => {
    cy.get('a[href*="product/category&path"]').contains("Fragrance").click();

    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index: " + index + ":" + $el.text());
    });
  });

  it.only("Log all the fragrance", () => {
    cy.get('a[href*="product/category&path"]').contains("Fragrance").click();
    cy.selectProduct("Gucci");
  });

  it.only("Log all the fragrance", () => {
    cy.get('a[href*="product/category&path"]').contains("Fragrance").click();
    cy.selectProduct("Beauty");
  });
});
