describe('UI Test - Contact Us Page', () => {
  it('should display all form elements correctly on the contact page', () => {
    cy.visit('https://automationexercise.com');

    // Navigate to Contact Us
    cy.contains('Contact us').click();

    // Verify the heading
    cy.contains('Get In Touch').should('be.visible');

    // Check all form input fields are visible
    cy.get('[name="name"]').should('be.visible').and('have.attr', 'placeholder', 'Name');
    cy.get('[name="email"]').should('be.visible').and('have.attr', 'placeholder', 'Email');
    cy.get('[name="subject"]').should('be.visible').and('have.attr', 'placeholder', 'Subject');
    cy.get('#message').should('be.visible');

    // Check file upload and submit button
    cy.get('[name="upload_file"]').should('exist');
    cy.get('[name="submit"]').should('be.visible').and('have.value', 'Submit');
  });
});
