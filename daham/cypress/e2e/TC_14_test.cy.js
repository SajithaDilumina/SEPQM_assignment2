describe('Performance Test - Page Load Time', () => {
    it('should load the homepage within acceptable time', () => {
      cy.visit('https://www.demoblaze.com');
  
      // Wait until the page is fully loaded
      cy.window().then((win) => {
        const performance = win.performance;
        const timing = performance.timing;
  
        const loadTime = timing.loadEventEnd - timing.navigationStart;
  
        cy.log(`Page load time: ${loadTime} ms`);
        expect(loadTime).to.be.lessThan(5000); // Threshold in ms
      });
    });
  });
  