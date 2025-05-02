describe('Functional Test - Search Products', () => {
    it('should allow user to search and view products', () => {
      cy.visit('https://automationexercise.com');
      cy.get('.shop-menu a').contains('Products').click();
      cy.get('#search_product').type('Tshirt');
      cy.get('#submit_search').click();
      cy.contains('Searched Products').should('be.visible');
      cy.get('.productinfo').should('have.length.greaterThan', 0);
    });
  });
  