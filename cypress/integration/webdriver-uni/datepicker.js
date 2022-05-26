/// <reference types='cypress' />

describe("Exercices with datepicker", () => {
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
  });
  it("Test scenario for datepicker", () => {
    let date = new Date();
    date.setDate(date.getDate() + 240);

    const futureDay = date.getDate();
    const futureYear = date.getFullYear();
    const futureMonth = date.toLocaleString("default", { month: "long" });
    cy.log(`Future year ${futureYear}`);
    cy.log(`Future Month ${futureMonth}`);
    cy.get("#datepicker").click();
    //choose previous month
    // cy.contains("prev").click();
    // cy.get(".datepicker-days").find(".prev").click();
    // choose next month
    // cy.get(".datepicker-days").find(".next").click();
    // choose date 24
    // cy.contains("24").click();
    cy.get(".datepicker-switch").first().next();
    function setFutureYearMonth() {
      cy.get(".datepicker-dropdown")
        .find(".datepicker-switch")
        .first()
        .then((currentDate) => {
          if (!currentDate.text().includes(futureYear)) {
            cy.get(".next").first().click();
            setFutureYearMonth();
          }
        })
        .then((currentMonth) => {
          if (!currentMonth.text().includes(futureMonth)) {
            cy.get(".next").first().click();
            setFutureYearMonth();
          }
        });
    }

    function setfutureDay() {
      cy.get("[class='day']").contains(futureDay).click();
    }
    setFutureYearMonth();
    setfutureDay();
  });
});
