import {
  Before,
  Given,
  When,
  And,
  Then,
} from "cypress-cucumber-preprocessor/steps";

let stub;
Before(() => {
  cy.log("Execution before step");
  stub = cy.stub();
});

Given("I access the webdriverUniversity Login Portal Page", () => {
  cy.visit("http://www.webdriveruniversity.com/Login-Portal/index.html");
});

When("I enter a username {word}", (UserName) => {
  cy.get("#text").type(UserName);
});

And("I enter a password {word}", (passWord) => {
  cy.get("#password").type(passWord);
});

And("I click on the login button", () => {
  cy.get("#login-button").click();
  cy.on("window:alert", stub);
  // cy.on("window:alert", (str) => {
  // expect(str).to.equal("validation succeeded");
  // });
});

Then(
  "I should be presented with following message {word} {word}",
  (word1, word2) => {
    const expect_message = word1 + " " + word2;
    // cy.log(expect_message);
    expect(stub.getCall(0)).to.be.calledWith(expect_message);
  }
);

When("user enters a username", function (DataTable) {
  cy.get("#text").type(DataTable.rawTable[1][0]);
});
