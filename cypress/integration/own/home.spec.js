/// <reference types="cypress" />

describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });
  it("Check Two cards", () => {
    cy.get("div").should("have.class", "row").children(".col-6");

    cy.get("[data-cy=first-h1]")
      .should("have.class", "first-h1")
      .contains("First H1");
  });

  it("check paragraph", () => {
    cy.get("[data-cy=first-para]")
      .should("have.class", "first-para")
      .contains("I am a paragraph 1");
  });
});
