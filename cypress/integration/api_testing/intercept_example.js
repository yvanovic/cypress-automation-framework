/// <reference types='cypress'/>
describe("Network request with intercept ", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/network-requests");
  });

  it.only("Get request and stub response", () => {
    cy.intercept(
      {
        method: "GET",
        url: "**/comments/*",
      },
      { fixture: "intercept_data" }
    ).as("getComment");
    cy.get(".network-btn").click();
    cy.wait("@getComment").its("response.statusCode").should("be.eq", 200);
    cy.get(".network-comment").should("have.text", "Hello Johny");
    cy.get(".network-comment").contains("Hello Johny");
  });

  it("POST request and stub response", () => {
    cy.intercept(
      {
        method: "POST",
        url: "/comments",
      },
      {
        body: {
          id: 502,
          name: "John with cy.intercept",
          email: "john.Smith@example.com",
          body: "We stub the post request",
        },
      }
    ).as("postComment");
    cy.get(".network-post").click();
    // cy.wait("@postComment").its("response.statusCode").should("be.eq", 200);
    cy.wait("@postComment").should(({ request, response }) => {
      cy.log("Request: " + JSON.stringify(request));
      expect(response.body).to.have.property(
        "body",
        "We stub the post request"
      );
      expect(response.statusCode).to.eq(200);
      expect(request.headers).to.have.property("content-type");
    });
  });
});
