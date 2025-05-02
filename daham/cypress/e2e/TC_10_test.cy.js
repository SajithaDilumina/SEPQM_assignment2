describe('TC_24 - Remove Product from Cart', () => {
    it('should remove a product from the cart', () => {
      cy.visit('https://www.demoblaze.com');
      cy.contains('Samsung galaxy s6').click();
      cy.contains('Add to cart').click();
      cy.on('window:alert', () => true);
      cy.contains('Cart').click();
      cy.get('tr.success td a').contains('Delete').click();
  
      cy.wait(1000); // wait for deletion
      cy.get('tr.success').should('not.exist');
    });
  });
  