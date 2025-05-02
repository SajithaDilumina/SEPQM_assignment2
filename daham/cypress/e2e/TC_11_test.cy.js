describe('TC_25 - Complete Purchase Flow', () => {
    it('should complete a purchase', () => {
      cy.visit('https://www.demoblaze.com');
      cy.contains('Samsung galaxy s6').click();
      cy.contains('Add to cart').click();
      cy.on('window:alert', () => true);
  
      cy.contains('Cart').click();
      cy.contains('Place Order').click();
  
      cy.get('#name').type('John Doe');
      cy.get('#country').type('USA');
      cy.get('#city').type('New York');
      cy.get('#card').type('1234567890123456');
      cy.get('#month').type('12');
      cy.get('#year').type('2025');
  
      cy.contains('Purchase').click();
  
      cy.get('.sweet-alert').should('be.visible');
      cy.get('.confirm').click(); // close confirmation
    });
  });
  