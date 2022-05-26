class HairCare_PO {
  addProductToBasket(productName) {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text() === productName) {
        cy.get(".productcart").eq(index).click();
      }
    });
  }
}
export default HairCare_PO;
