describe('Functional Test - Category Navigation', () => {
    it('should allow a user to browse products by category', () => {
        // Step 1: Visit the homepage of the website
        cy.visit('https://www.demoblaze.com'); // Replace with the actual URL of your website

        // Step 2: Click on a product category (e.g., "Phones")
        cy.contains('Phones').click(); // Replace with the category name you want to test

        // Step 3: Verify that the category page content is visible
        // Since the URL doesn't change, we will check for a category-specific element
        cy.contains('All products in Phones').should('be.visible'); // Ensure the page displays a heading for the category

        // Step 4: Verify that products from the selected category are displayed
        cy.get('.product').should('have.length.greaterThan', 0); // Ensure there are products displayed in the category

        // Step 5: Optionally, check that the products belong to the correct category
        cy.get('.product').each(($el) => {
            cy.wrap($el).contains('Phone'); // Check that each product contains the word "Phone" in its name or description
        });
    });

    it('should display the correct number of products when selecting a category', () => {
        // Step 1: Visit the homepage of the website
        cy.visit('https://www.demoblaze.com'); // Replace with the actual URL of your website

        // Step 2: Click on the "Laptops" category
        cy.contains('Laptops').click(); // Replace with the category name you want to test

        // Step 3: Verify that the correct products are displayed for the category
        // Since the URL doesn't change, check for category-specific content
        cy.contains('All products in Laptops').should('be.visible'); // Check if category heading is visible

        // Step 4: Verify that the page contains multiple products
        cy.get('.product').should('have.length.greaterThan', 0); // Ensure there are products displayed in the category

        // Step 5: Check for product titles or product descriptions that contain the word "Laptop"
        cy.get('.product').each(($el) => {
            cy.wrap($el).contains('Laptop'); // Ensure each product contains the word "Laptop"
        });
    });

    it('should allow a user to switch between categories', () => {
        // Step 1: Visit the homepage
        cy.visit('https://www.demoblaze.com'); // Replace with the actual URL of your website

        // Step 2: Click on the "Phones" category
        cy.contains('Phones').click();

        // Step 3: Verify that the "Phones" category content is displayed
        cy.contains('All products in Phones').should('be.visible'); // Check that category content is visible

        // Step 4: Switch to the "Laptops" category
        cy.contains('Laptops').click();

        // Step 5: Verify that the "Laptops" category content is displayed
        cy.contains('All products in Laptops').should('be.visible'); // Ensure the content for Laptops is visible
    });
});
