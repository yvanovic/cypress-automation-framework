// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("selectProduct", (productName) => {
  cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
    if ($el.text().includes(productName)) {
      cy.wrap($el).click();
    }
  });
});

Cypress.Commands.add(
  "webdriver_submit_contact",
  (first_name, last_name, email, feedback_comment, $selector, sub_text) => {
    cy.get('[name="first_name"]').type(first_name);
    cy.get('[name="last_name"]').type(last_name);
    cy.get('[name="email"]').type(email);
    cy.get("textarea.feedback-input").type(feedback_comment);
    // cy.get('[type="submit"]').click();
    cy.get("#contact_form").pause().submit();
    cy.wait(200, {});
    cy.get($selector).pause().contains(sub_text, { timeout: 3000 });
  }
);

Cypress.Commands.add("addProductToBasket", (productName) => {
  cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
    if ($el.text() === productName) {
      cy.get(".productcart").eq(index).click();
    }
  });
});
