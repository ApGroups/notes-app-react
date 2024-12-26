describe('Notes App', () => {
  it('should create notes and find them on the list', () => {
    // Visit the app's homepage
    cy.visit("/");

    // Create the first note
    cy.get("[data-type=title]").type("New note");
    cy.get("[data-type=body]").type("Note body");
    cy.get('[data-type=notes-form]').submit();

    // Verify the first note exists in the list
    cy.get('[data-type=note]')
      .should('contain.text', 'New note')
      .and('contain.text', 'Note body');

    // Create the second note
    cy.get("[data-type=title]").clear().type("Another note");
    cy.get("[data-type=body]").clear().type("Another body");
    cy.get('[data-type=notes-form]').submit();

    // Verify the second note exists in the list
    cy.get('[data-type=note]')
      .should('contain.text', 'Another note')
      .and('contain.text', 'Another body');
  });
});
