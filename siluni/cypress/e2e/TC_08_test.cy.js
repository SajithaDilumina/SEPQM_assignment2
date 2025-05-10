describe("PIM - Employee Search Functionality", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");

    // Navigate to PIM section
    cy.contains("PIM").click();
    cy.url().should("include", "/pim/viewEmployeeList");
  });

  it("TC_08: Should return correct employee details in PIM search results", () => {
    cy.get('input[placeholder="Type for hints..."]').first().type("Joy");
    cy.get('button[type="submit"]').contains("Search").click();

    cy.get(".oxd-table-body", { timeout: 10000 })
      .should("be.visible")
      .within(() => {
        cy.contains(".oxd-table-cell", "Joy").should("exist");
      });
  });

  it("TC_09: Should return no results when searching for a non-existent employee", () => {
    cy.get('input[placeholder="Type for hints..."]')
      .first()
      .type("IamNotAnEmployee");
    cy.get('button[type="submit"]').contains("Search").click();

    cy.get(".oxd-table-body").find(".oxd-table-row").should("have.length", 0);
  });
});
