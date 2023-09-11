/// <reference types='Cypress' />
describe("Test", () => {
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#data-table").invoke("removeAttr", "target").click();
  });
  it("Calculate and assert the total age of all users", () => {
    // cy.get("#data-table").invoke("removeAttr", "target").click();
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
            number += Number(userDetails[i]);
          }
        }
        cy.log("Found the total age:" + number);
        expect(number).to.equal(322);
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
  it("Calculate the age of given user and get his age", () => {
    cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el, index) => {
      const text_1 = $el.text();
      if (text_1.includes("Woods")) {
        cy.get("tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(($age) => {
            const userAge = $age.text();
            expect(userAge).to.equal("80");
          });
      }
    });
  });

  it("Select multiple input at the same time", () => {
    cy.document()
      .its("forms.form-textfield.elements")
      .then((elements) => {
        console.log(elements);
        elements["firstname"].value = "Yvan";
        elements["lastname"].value = "Niyo";
      });
    cy.get("textarea").type("text of the area");
  });
});
