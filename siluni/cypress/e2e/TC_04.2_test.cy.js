describe("Invalid Performance Test - Login Flow", () => {
  it("measures login time incorrectly", () => {
    const loginStartTime = Date.now();

    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();

    const loginEndTime = Date.now();

    const loginDuration = loginEndTime - loginStartTime;
    cy.log(`Login Duration (invalid): ${loginDuration} ms`);

    expect(loginDuration).to.be.lessThan(1000);
  });
});
