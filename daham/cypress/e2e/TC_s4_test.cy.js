describe('Invalid Test - Login Failure', () => {
  it('should show error on wrong credentials', () => {
    cy.visit('https://automationexercise.com');
    cy.contains('Signup / Login').click();
    cy.get('[data-qa="login-email"]').type('wronguser@example.com');
    cy.get('[data-qa="login-password"]').type('wrongpassword');
    cy.get('[data-qa="login-button"]').click();
    cy.contains('Your email or password is incorrect!').should('be.visible');
  });
});
