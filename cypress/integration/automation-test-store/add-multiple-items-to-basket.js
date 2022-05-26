import AutoStore_Homepage_PO from "../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO";
import HairCare_PO from "../../support/pageObjects/automation-test-store/HairCarePage_PO";
/// <reference types="cypress" />

describe("Add multiple items to basket", () => {
  const AutoHomePage = new AutoStore_Homepage_PO();
  const HairCarePage = new HairCare_PO();
  before(function () {
    cy.fixture("products").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    // cy.visit("https://automationteststore.com/");
    // cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    AutoHomePage.visitHomePage();
    AutoHomePage.clickOn_HairCare_Button();
  });
  it("Add specific items to basket", () => {
    globalThis.data.productName.forEach(function (element) {
      HairCarePage.addProductToBasket(element);
    });
    cy.get(".dropdown-toggle > .fa").click();
  });
});
