/// <reference types="cypress" />

describe("Alias and invoke", () => {
  // Run only if it's different of Chrome browser
  it("Validate a specific hair care product", { browser: "!chrome" }, () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("ProductThumbnail");
    cy.get("@ProductThumbnail").its("length").should("be.gt", 5);
    cy.get("@ProductThumbnail").should("include", "Seaweed Conditioner");
  });
  // Run only if it's firefox
  it("Number of thumbnail", { browser: "firefox" }, () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productThumbnail");
    cy.get("@productThumbnail").should("have.length", 16);
    cy.get("@productThumbnail")
      .find(".productcart")
      .invoke("attr", "title") // invoke the attribute
      .should("include", "Add to Cart");
  });

  // Run only if it's different of Chrome browser
  it("Get price of items", { browser: "!firefox" }, () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productThumbnail");
    // cy.get("@productThumbnail")
    // .find(".oneprice")
    // .each(($el, index, $list) => {
    // cy.log($el.text());
    // });
    cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice");
    cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice");
    cy.get("@itemPrice").then(($linkText) => {
      const itemPrice = $linkText.split("$");
      cy.log(itemPrice);
      for (let i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[i]);
      }
    });
  });
});
