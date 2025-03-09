/// <reference types="cypress" />
import xpaths from './common/dataObject';
import urls from './common/url';

describe('Navigation & Page Redirections', () => {
  it('it can successfully navigate to Advanced Search ABN', () => {
    cy.openABNwebPage();
    cy.clickItem(xpaths.searchMenu);
    cy.contains("Advanced search").as('item');
    cy.get("@item").click({force : true});

    //Assertions
    cy.url().should('eq', urls.advancedSearch);
  });

  it('it can successfully navigate to ABN Lookup Tool', () => {
    cy.openABNwebPage();
    cy.clickItem(xpaths.toolsAndResources);
    cy.contains("ABN Lookup tools").as('item');
    cy.get("@item").click({force : true});

    //Assertions
    cy.url().should('eq', urls.toolsAndResources);
  });

  it('it can successfully navigate to Entity Type List', () => {
    cy.openABNwebPage();
    cy.clickItem(xpaths.help);
    cy.contains("Entity types").as('item');
    cy.get("@item").click({force : true});

    //Assertions
    cy.url().should('eq', urls.entityTypes);
  });
})