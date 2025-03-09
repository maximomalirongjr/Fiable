/// <reference types="cypress" />
import fixtures from '../fixtures/data.json';
import constants from './common/constant';
import xpaths from './common/dataObject';

describe('ABN Lookup Functionality', () => {
  it('Search with a valid ABN (Australian Business Number) and verify the displayed details.', () => {
    const data = fixtures.validAbnSearch;
    
    cy.openABNwebPage();
    cy.searchAbn(data.abn);
    cy.wait(500);

    //Assertions
    cy.get(xpaths.entityName).should('have.text', data.entityName);
    cy.contains(data.abnStatus).should('be.visible');
    cy.get(xpaths.entityType).should('have.text', data.entityType);
    cy.contains(data.goodsAndServices).should('be.visible');
    cy.get(xpaths.mainBusinessLocation).should('have.text', data.businessLocation);
  });

  it('Search with an invalid ABN and check for appropriate error messages.', () => {
    cy.openABNwebPage();
    cy.searchAbn("x0x0x1x0");
    cy.wait(500);

    //Assertions
    cy.contains(constants.noMatchingNames).should('be.visible');
  });

  it('Search using a business name and verify the search results.', () => {
    const data = fixtures.validAbnSearch;
    const entityNameList = [
      "GWAPO PTY LTD",
      "GWAPO STUDIO",
      "The Trustee for the Gwapo Superannuation Fund",
      "GWAPO FILIPINO STREET FOOD",
      "Gwapa",
      "GWAPA AU",
      "The Trustee for GWAP Family Trust",
      "The Trustee for GWAPA INVESTMENTS TRUST",
      "GWEEPO",
      "GWOP CO.",
      "GWOP APPAREL"
    ]

    cy.openABNwebPage();
    cy.searchAbn(data.entityName);
    cy.wait(500);

    //Assertions
    cy.contains(constants.searchedFound).should('be.visible');
    entityNameList.forEach((name) => {
      cy.contains(name).should('be.visible');
    })
  });

  it('Search using a partial name and verify the search results.', () => {
    const data = fixtures.validAbnSearch;

    cy.openABNwebPage();
    cy.searchAbn(data.entityName);
    cy.wait(500);

    //Assertions
    cy.contains(constants.searchedFound).should('be.visible');
  });
})