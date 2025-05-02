describe('Performance Test - Homepage Load Time', () => {
  it('should load homepage in under 3 seconds', () => {
    cy.visit('https://automationexercise.com');
    cy.window().then((win) => {
      const timing = win.performance.timing;
      const loadTime = timing.loadEventEnd - timing.navigationStart;
      cy.log(`Load Time: ${loadTime} ms`);
      expect(loadTime).to.be.lessThan(3000);
    });
  });
});
