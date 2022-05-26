/// <reference types='cypress' />

describe("Add products into basket", () => {
  beforeEach(() => {
    cy.visit("http://www.automationteststore.com");
    cy.get('a[href*="product/category&path"]').contains("Hair Care").click();
  });

  it("Add three products int shopping cart", () => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if (index == 0) {
        return;
      }
      cy.get(".productcart").eq(index).click({ force: true }).debug();
      // $el.trigger("click");
    });
  });
});
