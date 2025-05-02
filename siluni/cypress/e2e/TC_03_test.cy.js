describe('TC_03 - Search Functionality', () => {
    it('should display correct search results after login', () => {
      cy.visit('http://yourapplication.com/login'); // Use your actual app's URL
  
      // Login
      cy.get('#username').should('be.visible').type('validUser');
      cy.get('#password').should('be.visible').type('validPassword');
      cy.get('#loginButton').should('be.visible').click();
  
      // Wait or assert successful login if needed
      // cy.url().should('include', '/dashboard');
  
      // Perform Search
      cy.get('#searchBox').should('be.visible').type('testing');
      cy.get('#searchButton').should('be.visible').click();
  
      // Assert results contain the search term
      cy.get('#searchResults')
        .should('be.visible')
        .invoke('text')
        .then((text) => {
          if (text.includes('testing')) {
            cy.log('TC_03 - Search functionality: PASSED');
          } else {
            cy.log('TC_03 - Search functionality: FAILED');
            throw new Error('Search term not found in results');
          }
        });
    });
  });
  