/// <reference types='cypress' />

describe("Test Contact us on automatio test store", () => {
  before(() => {
    cy.fixture("example").as("user");
  });
  beforeEach(() => {
    // cy.viewport("macbook-15");
    cy.visit("http://www.automationteststore.com");
  });

  it.only("Should be able to submit a successful submission via contact us form", () => {
    cy.get("a[href$='contact']")
      .click()
      .then(($mytext) => {
        cy.log($mytext.text());
      });
    //cy.xpath("//a[contains(@href, 'contact')]").click();
    cy.get("@user").then((user) => {
      cy.get("#ContactUsFrm_first_name").type(user.first_name);
      cy.get("#ContactUsFrm_email").type(user.emails);
    });
    cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
    cy.get("#ContactUsFrm_enquiry").type(
      "Do you provide additional discount on bulk orders?"
    );
    cy.get("button[title='Submit']").click();
    cy.log("Test ended!");
  });

  it("Validate Properties of contact us form", () => {
    cy.get("a[href$='contact']").click();
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain", "First name");

    cy.contains("#ContactUsFrm", "Contact Us Form").then(($mytext) => {
      const firstname = $mytext.find("#field_11").text();
      expect(firstname).to.contain("First name");
    });
  });
});
