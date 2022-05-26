/// <reference types="cypress" />

describe("Verify radio buttons via webdriveruni", () => {
  it("Check specific radio buttons", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable").trigger("mousemove");
    cy.get("#draggable").trigger("mouseup");
    cy.get("#droppable").find("p").find("b").should("contain", "Dropped!");
    cy.get("#droppable")
      .find("p")
      .should(
        "have.attr",
        "style",
        "background-color: rgb(244, 89, 80); height: 100%;"
      );
    // cy.get("#droppable").then(($el) => {
    //   expect($el).to.have.css("background-color", "244, 89, 80");
  });
});
