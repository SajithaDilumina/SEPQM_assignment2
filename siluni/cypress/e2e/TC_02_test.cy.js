describe("TC_02.1 - Reset Button Clears Search Filters in PIM (UI testing)", () => {
  it("should filter results and then clear all filters when Reset button is clicked", () => {
    // Step 1: Login
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();

    // Step 2: Navigate to PIM > Employee List
    cy.contains("PIM").click();
    cy.url().should("include", "/pim/viewEmployeeList");

    // Step 3: Fill Search Filters
    cy.get('input[placeholder="Type for hints..."]').eq(0).type("Ava");

    // Employment Status
    cy.get(".oxd-select-text").eq(0).click();
    cy.get(".oxd-select-dropdown").contains("Full-Time Probation").click();

    // Step 4: Click Search
    cy.get('button[type="submit"]').contains("Search").click();

    // Step 6: Click Reset
    cy.contains("Reset").click();

    // Step 7: Assert filters are cleared
    cy.get('input[placeholder="Type for hints..."]')
      .eq(0)
      .should("have.value", "");
    cy.get(".oxd-select-text").eq(0).should("contain.text", "-- Select --");
  });
});

describe("TC_02.2_Negative - Reset Button Fails to Clear Search Filters in PIM (UI testing)", () => {
  it("should not clear filters if Reset button fails or is not functional", () => {
    // Step 1: Login
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();

    // Step 2: Navigate to PIM > Employee List
    cy.contains("PIM").click();
    cy.url().should("include", "/pim/viewEmployeeList");

    // Step 3: Fill Search Filters
    cy.get('input[placeholder="Type for hints..."]').eq(0).type("Ava");
    cy.get(".oxd-select-text").eq(0).click();
    cy.get(".oxd-select-dropdown").contains("Full-Time Probation").click();

    // Step 4: Click Search
    cy.get('button[type="submit"]').contains("Search").click();

    // Step 5: Simulate reset button failure (disable or remove it)
    cy.contains("Reset").invoke("attr", "disabled", true);

    // Step 6: Try to click Reset and check that it has no effect
    cy.contains("Reset").click({ force: true });

    // Step 7: Assert filters are still populated
    cy.get('input[placeholder="Type for hints..."]')
      .eq(0)
      .should("have.value", "Ava");
    cy.get(".oxd-select-text")
      .eq(0)
      .should("contain.text", "Full-Time Probation");
  });
});
