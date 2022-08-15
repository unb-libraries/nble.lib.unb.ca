const host = 'https://nble.lib.unb.ca'
describe('New Brunswick Literary Encyclopedia', {baseUrl: host, groups: ['sites']}, () => {

  context('Front page', {baseUrl: host}, () => {
    beforeEach(() => {
      cy.visit('/')
      cy.title('New Brunswick Literary Encyclopedia')
    })

    specify('"Browser by letter" should contain 20+ letters', () => {
      cy.get('.glossary-alpha .view-header')
        .should('contain', 'Browse by letter')
      cy.get('.glossary-alpha .view-content span.views-summary')
        .should('have.lengthOf.at.least', 20)
      cy.get('.glossary-alpha .view-content span.views-summary:first-child a')
        .its('0.href')
        .should('match', /\/browse\/a/)
    })

    specify('contains a search form', () => {
      cy.get('input[value="Search"]')
        .parents('form')
        .should('be.visible')
    })

    specify('Search for "bliss" finds 10+ results', () => {
      cy.get('form#views-exposed-form-search-encyclopedia-page-1').within(() => {
        cy.get('#edit-query')
          .type('bliss')
      }).submit()
      cy.url()
        .should('match', /\/search\?query=/)
      cy.get('h1')
        .should('contain', 'Showing 1 - 10 of')
      cy.get('ul.list-unstyled li')
        .should('have.lengthOf', 10)
    });
  });

  context('Browse "A"', {baseUrl: `${host}/browse/a`}, () => {
    beforeEach(() => {
      cy.visit('/')
      cy.title()
        .should('contain', 'Listings for')
    })

    specify('1+ items should be listed', () => {
      cy.get('h1')
        .should('contain', 'Listings for')
      cy.get('ul.list-unstyled li')
        .should('have.lengthOf.at.least', 1)
    })
  })

})
