import HomePage_PO from "../../support/pageObjects/webdriver-uni/HomePage_PO";
import Contact_US_PO from "../../support/pageObjects/webdriver-uni/ContactUsPage_PO";
/// <reference types='cypress' />

describe("Test Contact Us from WebdriverUni", () => {
  Cypress.config("defaultCommandTimeout", 2000);
  const contact_Us_PO = new Contact_US_PO();
  const homePage_PO = new HomePage_PO();
  before(() => {
    cy.fixture("example_one").then((data) => {
      globalThis.data1 = data;
    });
  });
  beforeEach(() => {
    homePage_PO.visitHomePage();
    homePage_PO.clickOn_contactUs_Button();
  });
  it("It should be able to sumbmit successfully", () => {
    contact_Us_PO.contactForm_Submission(
      data1.first_name,
      Cypress.env("last_name"),
      data1.email,
      "This is a shit tutorial",
      "h1",
      "Thank You for your Message!"
    );
  });
  it("It should not be sumbmitted successfully", () => {
    // cy.webdriver_submit_contact(
    // data1.first_name,
    // data1.last_name,
    // " ",
    // "This is a shit tutorial",
    // "body",
    // "Invalid email address"
    // );
    contact_Us_PO.contactForm_Submission(
      data1.first_name,
      Cypress.env("last_name"),
      "invalid_email",
      "This is a shit tutorial",
      "body",
      "Invalid email address"
    );
  });
});
