import Chance from 'chance';
const chance = new Chance();

describe('Workflow do Calendário', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/calendario');
  });

  it('should add a new event and view its details', () => {
    // Generate random event data
    const eventTitle = chance.sentence({ words: 3 });
    const eventDate = new Date();
    const formattedEventDate = eventDate.toISOString().slice(0, 10); // YYYY-MM-DD
    const eventLocal = chance.address();

    cy.contains('Novo evento').click();

    cy.get('#titulo').type(eventTitle);
    cy.get('#data').type(formattedEventDate);
    cy.get('#local').type(eventLocal);
    cy.contains('Salvar').click();

    cy.get('td')
      .contains(eventDate.getDate())
      .parent('td')
      .find('.evento-wrapper:contains("' + eventTitle + '")')
      .click();

    cy.get('h4').should('contain', eventTitle);
    cy.get('.info').should('contain', formattedEventDate);
    cy.get('.info').should('contain', eventLocal);
  });
});