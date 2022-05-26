/// <reference types='cypress' />

const available_fixture = [
  {
    name: "example_one",
    context: "1",
  },
  {
    name: "example_two",
    context: "2",
  },
];

describe("Use multiple test data for one test ", () => {
  // loop through both fixture
  beforeEach(() => {
    // cy.viewport("macbook-15");
    cy.visit("http://www.automationteststore.com");
  });
  available_fixture.forEach((afixture) => {
    describe(afixture.context, () => {
      before(function () {
        cy.fixture(afixture.name).then((data) => {
          globalThis.data = data;
        });
      });
      it("Describe test scenario", () => {
        cy.get("a[href$='contact']").click();
        cy.get("#ContactUsFrm_first_name").type(data.first_name);
        cy.get("#ContactUsFrm_email").type(data.email);
        cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
        cy.get("#ContactUsFrm_enquiry").type(
          "Do you provide additional discount on bulk orders?"
        );
        cy.get("button[title='Submit']").click();
      });
    });
  });
});
