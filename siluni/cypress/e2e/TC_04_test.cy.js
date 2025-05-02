describe('TC_04 - Logout Functionality', () => {
    it('should redirect to login page after logout', () => {
      // Visit login page
      cy.visit('https://practicetestautomation.com/practice-test-login/');
  
      // Login with valid credentials
      cy.get('#username').should('be.visible').type('student');
      cy.get('#password').should('be.visible').type('Password123');
      cy.get('#submit').should('be.visible').click();
  
      // Verify successful login
      cy.url().should('include', '/logged-in-successfully');
      cy.get('h1').should('contain', 'Logged In Successfully');
  
      // Click logout button
      cy.get('.wp-block-button__link').contains('Log out').click();
  
      // Verify redirection to login page
      cy.url().should('include', '/practice-test-login');
      cy.get('button#submit').should('be.visible'); // login button present again
    });
  });
