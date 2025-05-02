describe('TC_26 - Homepage Load Performance', () => {
    it('should load the homepage in under 3 seconds', () => {
      const start = performance.now();
      cy.visit('https://www.demoblaze.com').then(() => {
        const end = performance.now();
        const loadTime = end - start;
        expect(loadTime).to.be.lessThan(3000);
      });
    });
  });
  