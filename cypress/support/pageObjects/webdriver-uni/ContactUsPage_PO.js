class Concat_US_PO {
  contactForm_Submission(
    first_name,
    last_name,
    email,
    feedback_comment,
    $selector,
    sub_text
  ) {
    cy.get('[name="first_name"]').type(first_name);
    cy.get('[name="last_name"]').type(last_name);
    cy.get('[name="email"]').type(email);
    cy.get("textarea.feedback-input").type(feedback_comment);
    // cy.get('[type="submit"]').click();
    cy.get("#contact_form").submit();
    cy.get($selector).contains(sub_text, { timeout: 3000 });
  }
}
export default Concat_US_PO;
