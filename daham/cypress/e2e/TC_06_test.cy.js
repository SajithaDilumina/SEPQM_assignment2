describe('TC_09 - Measure Login Page Load and Login Submission Time', () => {
  it('should load login page and complete login within performance limits', () => {
    const thresholds = {
      pageLoad: 3000,    // ms
      loginTime: 4000    // ms
    };

    const startPageLoad = new Date().getTime();

    // Step 1: Visit login page
    cy.visit('https://opensource-demo.orangehrmlive.com/').then(() => {
      const endPageLoad = new Date().getTime();
      const pageLoadTime = endPageLoad - startPageLoad;

      cy.log(`🚀 Login Page Load Time: ${pageLoadTime} ms`);
      expect(pageLoadTime).to.be.lessThan(thresholds.pageLoad);

      // Step 2: Perform login and measure time
      const startLogin = new Date().getTime();

      cy.get('input[name="username"]').type('Admin');
      cy.get('input[name="password"]').type('admin123');
      cy.get('button[type="submit"]').click();

      // Wait for dashboard
      cy.url({ timeout: 10000 }).should('include', '/dashboard').then(() => {
        const endLogin = new Date().getTime();
        const loginTime = endLogin - startLogin;

        cy.log(`🔐 Login Submission Time: ${loginTime} ms`);
        expect(loginTime).to.be.lessThan(thresholds.loginTime);

        // Optional logging
        if (pageLoadTime > thresholds.pageLoad || loginTime > thresholds.loginTime) {
          cy.writeFile('cypress/logs/performance_log.txt', `⚠️ Page Load: ${pageLoadTime}ms | Login Time: ${loginTime}ms\n`, { flag: 'a+' });
          cy.screenshot('login-performance-warning');
        }
      });
    });
  });
});
