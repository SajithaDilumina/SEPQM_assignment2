describe('TC_08_PIM - Search for Employee in PIM Section', () => {
    it('should return correct employee details in PIM search results', () => {
      // Step 1: Login
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      cy.get('input[name="username"]').type('Admin');
      cy.get('input[name="password"]').type('admin123');
      cy.get('button[type="submit"]').click();
  
      // Step 2: Navigate to PIM > Employee List
      cy.contains('PIM').click();
      cy.url().should('include', '/pim/viewEmployeeList');
  
      // Step 3: Fill Search Filters
      cy.get('input[placeholder="Type for hints..."]').eq(0).type('Ava');
  
      // Employment Status
      cy.get('.oxd-select-text').eq(0).click();
      cy.get('.oxd-select-dropdown').contains('Full-Time Probation').click();
  
      // Step 4: Click Search
      cy.get('button[type="submit"]').contains('Search').click();
  
      // Step 5: Validate results for Ava
      cy.get('.oxd-table-body', { timeout: 10000 }).should('be.visible').within(() => {
        cy.contains('Ava').should('exist');
        cy.get('div').eq(5).should('contain.text', 'Full-Time Probation');
      });
    });
  });
  