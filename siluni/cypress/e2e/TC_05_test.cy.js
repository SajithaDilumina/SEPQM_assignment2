describe('TC_05 - Add New Admin User', () => {
    it('should add a new admin user successfully', () => {
      // Step 1: Login
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      cy.get('input[name="username"]').type('Admin');
      cy.get('input[name="password"]').type('admin123');
      cy.get('button[type="submit"]').click();
  
      // Step 2: Go to Admin panel
      cy.contains('Admin').click();
      cy.url().should('include', '/admin/viewSystemUsers');
  
      // Step 3: Click Add
      cy.contains('Add').click();
  
      // Step 4: Fill form
      cy.get('.oxd-select-text').eq(0).click(); // User Role
      cy.get('.oxd-select-dropdown').contains('Admin').click();
  
      cy.get('.oxd-select-text').eq(1).click(); // Status
      cy.get('.oxd-select-dropdown').contains('Enabled').click();
  
      // Use full valid employee name
      cy.get('input[placeholder="Type for hints..."]').type('James Carter');
  
      // Proper way: wait for dropdown to appear, then find item separately
      cy.get('.oxd-autocomplete-dropdown', { timeout: 10000 }).should('be.visible').within(() => {
        cy.contains('James Carter').click();
      });
  
      // Generate unique username
      const randomUser = `sepqm${Math.floor(Math.random() * 10000)}`;
      cy.get('input.oxd-input').eq(1).type(randomUser);
  
      // Password fields
      cy.get('input.oxd-input[type="password"]').eq(0).type('P@ssw0rd123');
      cy.get('input.oxd-input[type="password"]').eq(1).type('P@ssw0rd123');
  
      // Submit
      cy.contains('Save').click();
  
      // Step 5: Verify new user appears in list
      cy.url({ timeout: 10000 }).should('include', '/admin/viewSystemUsers');
      cy.get('input[placeholder="Type for hints..."]').eq(1).type(randomUser);
      cy.contains('Search').click();
      cy.get('.oxd-table-body').should('contain.text', randomUser);
    });
  });
  