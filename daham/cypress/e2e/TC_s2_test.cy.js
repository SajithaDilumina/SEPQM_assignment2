describe('Functional Test - Contact Us', () => {
  it('should allow user to submit a contact form', () => {
    cy.visit('https://automationexercise.com');
    cy.contains('Contact us').click();
    cy.get('[name="name"]').type('John Doe');
    cy.get('[name="email"]').type('john@example.com');
    cy.get('[name="subject"]').type('Test Subject');
    cy.get('#message').type('This is a test message.');
    cy.get('[name="submit"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Success! Your details have been submitted successfully.');
    });
  });
});
