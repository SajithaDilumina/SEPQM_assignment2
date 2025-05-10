describe("TC_01.1 - Add Admin User: Positive Flow", () => {
  it("should add a user successfully", () => {
    // Login
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();

    // Go to Admin panel
    cy.contains("Admin").click();
    cy.url().should("include", "/admin/viewSystemUsers");

    // Positive Test: Add Valid User
    cy.contains("Add").click();

    // Select Role: Admin
    cy.get(".oxd-select-text").eq(0).click();
    cy.get(".oxd-select-dropdown").contains("Admin").click();

    // Select Status: Enabled
    cy.get(".oxd-select-text").eq(1).click();
    cy.get(".oxd-select-dropdown").contains("Enabled").click();

    // Use full valid employee name
    cy.get('input[placeholder="Type for hints..."]').type("John Doe");

    // Wait for dropdown to appear, then select
    cy.get(".oxd-autocomplete-dropdown", { timeout: 10000 })
      .should("be.visible")
      .within(() => {
        cy.contains("John Doe").click();
      });

    // Generate random username
    const randomUser = `sepqm${Math.floor(Math.random() * 10000)}`;
    cy.get("input.oxd-input").eq(1).type(randomUser);

    // Password fields
    cy.get('input.oxd-input[type="password"]').eq(0).type("P@ssw0rd123");
    cy.get('input.oxd-input[type="password"]').eq(1).type("P@ssw0rd123");

    // Click Save
    cy.contains("Save").click();

    // Verify user is added
    cy.url({ timeout: 10000 }).should("include", "/admin/viewSystemUsers");
    cy.get('input[placeholder="Type for hints..."]')
      .first()
      .should("be.visible")
      .clear()
      .type(randomUser);
    cy.contains("Search").click();
    cy.get(".oxd-table-body").should("contain.text", randomUser);
  });
});

describe("TC_01.2_Negative - Add Admin User with Empty Fields", () => {
  it("should display validation errors when adding a user with empty fields", () => {
    // Login
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();

    // Go to Admin panel
    cy.contains("Admin").click();
    cy.url().should("include", "/admin/viewSystemUsers");

    // Navigate to Add User page
    cy.contains("Add").click();

    // Select Role: Admin (to partially fill the form, simulating a realistic negative case)
    cy.get(".oxd-select-text").eq(0).click();
    cy.get(".oxd-select-dropdown").contains("Admin").click();

    // Leave other required fields blank and click Save
    cy.contains("Save").click();

    // Validate "Required" messages are shown for empty fields
    cy.get(".oxd-input-group__message")
      .should("exist")
      .and("contain.text", "Required");
  });
});
