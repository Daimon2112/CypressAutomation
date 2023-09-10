/// <reference types="Cypress" />

describe('My first test suit', function() {
  it.only('My first test case', function() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name =username]').type("Admin")
    
  })
}
)