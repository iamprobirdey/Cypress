/// <reference types="cypress" />

describe("All about about us", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/about");
  });

  it("Check the form", () => {
    cy.get("form").should("have.css", "margin-top", "200px");
    cy.get("input.email")
      .should("have.class", "email")
      .should("have.attr", "type", "email")
      .should("have.attr", "placeholder", "Email")
      .type("probir@gmail.com")
      .should("have.value", "probir@gmail.com");

    cy.get("[data-cy=password]")
      .should("have.class", "password")
      .should("have.attr", "type", "password")
      .should("have.attr", "placeholder", "Password")
      .type("password")
      .should("have.value", "password");
    //cy.get("input.email").invoke("attr", "placeholder").should("eq", "Email");

    // cy.get("[data-cy=submit]").click();
    cy.get("[data-cy=submit]").as("clickOnsubmit");

    cy.get("@clickOnsubmit").click();

    cy.get("span").should("have.class", "bg-success").contains("validated");
  });
});
