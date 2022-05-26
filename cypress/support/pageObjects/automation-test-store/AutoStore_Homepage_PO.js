class AutoStore_Homepage_PO {
  visitHomePage() {
    cy.visit("https://automationteststore.com/");
  }
  clickOn_HairCare_Button() {
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  }
}

export default AutoStore_Homepage_PO;
