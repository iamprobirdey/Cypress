/// <reference types="cypress" />

describe("All about about us", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/api");
  });

  it("Travesing list", () => {
    cy.get("[data-cy=connectors-lists]>li").then(($lis) => {
      cy.log($lis);
      expect($lis, "10 items").to.have.length(10);
      expect($lis.eq(0), "first item").to.contain("Leanne Graham");
    });
  });

  it("Request for getting lists of data", () => {
    cy.request("GET", "https://jsonplaceholder.cypress.io/todos/1").should(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
  });
});
