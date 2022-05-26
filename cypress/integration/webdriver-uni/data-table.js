/// <reference types='Cypress' />
describe("Test", () => {
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com");
  });
  it("Describe test scenario", () => {
    cy.get("#data-table").invoke("removeAttr", "target").click();
    // grab the element for the table
    let number = 0;
    const userDetails = [];
    cy.get("#thumbnail-1 td")
      .each(($el, index, $list) => {
        userDetails[index] = $el.text();
      })
      .then(() => {
        var i;
        for (i = 0; i < userDetails.length; i++) {
          if (Number(userDetails[i])) {
            number = Number(userDetails[i]);
          }
        }
        cy.log(number);
      });
    cy.get("tr td:nth-child(2)").each(($el, index) => {
      const text1 = $el.text();
      if (text1.includes("Smith")) {
        cy.get("tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(($age) => {
            const userAge = $age.text();
            expect(userAge).to.equal("45");
          });
      }
    });
  });
});
