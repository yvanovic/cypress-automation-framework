/// <reference types='cypress' />
import "cypress-iframe";
describe("Test alert iframe", () => {
  beforeEach(() => {
    // cy.viewport("macbook-15");
    cy.visit("http://www.webdriveruniversity.com");
  });
  it("It should be able to handle ifram", () => {
    // cypress code
    cy.get("#iframe").invoke("removeAttr", "target").click({ force: true });
    // cy.get("#frame").then(($iframe) => {
    //   const body = $iframe.contents().find("body");
    //   cy.wrap(body).as("iframe");
    // });
    // cy.get("@iframe").find("#button-find-out-more").click();
    // cy.get("@iframe").find("#myModal").as("modal");
    // cy.get("@modal").should(
    //   "include.text",
    //   "Welcome to webdriveruniversity.com we sell"
    // );
    // using another module to interact with iFrame
    cy.frameLoaded();
    cy.iframe().find("#button-find-out-more").click();
    cy.iframe().find("#myModal").as("modal");
    cy.get("@modal").should("include.text", "Welcome to");
    cy.get("@modal").find(".modal-footer").contains("Close").click();
  });
});
