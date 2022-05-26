/// <reference types='cypress'/>

describe("Test Api with Json API ", () => {
  let results;
  it("Validating status code of the user", () => {
    results = cy.request("https://jsonplaceholder.typicode.com/users");
    results.its("status").should("equal", 200);
  });
  it("Validate returned payload size", () => {
    cy.request(
      "https://jsonplaceholder.cypress.io/comments?_start=0&_limit=10"
    ).then((response) => {
      expect(response.body).to.have.length(10);
      expect(response.body[4]).has.property("id", 5);
      expect(response.body[4]).property("id").to.be.a("number");
    });
  });
  it("Validate /users contains the correct keys", () => {
    cy.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users",
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      let body = JSON.parse(JSON.stringify(response.body));
      expect(body[0]).has.property("id", 1);
      expect(body[1]).has.property("email", "Shanna@melissa.tv");
      body.forEach((item) => {
        expect(item).to.have.all.keys(
          "id",
          "name",
          "username",
          "email",
          "address",
          "phone",
          "website",
          "company"
        );
      });
    });
  });
  it("Create a /post with POST", () => {
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});
