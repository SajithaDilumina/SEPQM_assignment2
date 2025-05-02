describe('TC_10 - Contact Form Submission', () => {
    it('should submit contact form successfully', () => {
      cy.visit('https://automationexercise.com');
  
      cy.contains('Contact us').click();
      cy.url().should('include', '/contact_us');
  
      cy.get('input[data-qa="name"]').type('John Doe');
      cy.get('input[data-qa="email"]').type('john@example.com');
      cy.get('input[data-qa="subject"]').type('Test Subject');
      cy.get('textarea[data-qa="message"]').type('This is a test message for automation.');
  
      // Optional: attach a file if needed
      // cy.get('input[name="upload_file"]').attachFile('sample.pdf');
  
      cy.get('input[data-qa="submit-button"]').click();
  
      // Confirm alert and continue
      cy.on('window:alert', (txt) => {
        expect(txt).to.contains('Press OK to proceed');
      });
  
      // Check success message
      cy.get('.status.alert-success').should('contain', 'Success! Your details have been submitted successfully.');
    });
  });
  