// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('openABNwebPage', () => {
    cy.visit("https://abr.business.gov.au/");
})

Cypress.Commands.add('searchAbn', (value) => {
    cy.get('input[id="SearchText"]').clear().type(value);
    cy.get('input[id="MainSearchButton"]').click();
})

Cypress.Commands.add('input', (xpath, value) => {
    cy.get(xpath).clear().type(value);
})

Cypress.Commands.add('clickItem', (xpath) => {
    cy.get(xpath).click();
})