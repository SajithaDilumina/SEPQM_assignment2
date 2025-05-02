describe('Login Test', () => {
    it('Login with valid credentials', () => {
      cy.visit('https://practicetestautomation.com/practice-test-login/');
  
      // Enter username and password
      cy.get('#username').should('be.visible').type('student');
      cy.get('#password').should('be.visible').type('Password123');
  
      // Click login button
      cy.get('#submit').should('be.visible').click();
  
      // Now check if login succeeded or failed
      cy.url().then((currentUrl) => {
        if (currentUrl.includes('/logged-in-successfully/')) {
          cy.log('✅ Login Successful');
        } else {
          cy.log('❌ Login Failed');
        }
      });
    });
  });
  