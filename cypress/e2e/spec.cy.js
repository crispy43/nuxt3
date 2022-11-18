/* eslint-disable no-undef */
describe('empty spec', () => {
  it('visit index page', () => {
    cy.visit('http://localhost:8080');
  });
  it('displays register form', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('.register-form div').should('have.length', 6);
  });
});
